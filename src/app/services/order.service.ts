import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, Bot, OrderType, OrderStatus, BotStatus } from '../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    /** Order data stream - stores the state of all orders */
    private orders$ = new BehaviorSubject<Order[]>([]);

    /** Bot data stream - stores the state of all bots */
    private bots$ = new BehaviorSubject<Bot[]>([]);

    /** Next order ID counter */
    private nextOrderId = 1;

    /** Next bot ID counter */
    private nextBotId = 1;

    /** Timer reference for order processing loop */
    private processingInterval?: number;

    /** Store order processing timers for cancellation when needed */
    private orderTimers = new Map<number, any>();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        // Start order processing loop only in browser environment
        if (isPlatformBrowser(this.platformId)) {
            this.startProcessingLoop();
        }
    }

    /**
     * Get order data stream
     * @returns Observable<Order[]> Observer object of order array
     */
    getOrders(): Observable<Order[]> {
        return this.orders$.asObservable();
    }

    /**
     * Get bot data stream
     * @returns Observable<Bot[]> Observer object of bot array
     */
    getBots(): Observable<Bot[]> {
        return this.bots$.asObservable();
    }

    /**
     * Create normal order
     * Normal orders are added to the end of the queue
     */
    createNormalOrder(): void {
        const currentOrders = this.orders$.value;
        const newOrder: Order = {
            id: this.nextOrderId,
            type: OrderType.NORMAL,
            status: OrderStatus.PENDING,
            createdAt: new Date(),
        };

        this.orders$.next([...currentOrders, newOrder]);
        this.nextOrderId++;
    }

    /**
     * Create VIP order
     * VIP orders have priority and are inserted after existing VIP orders, before normal orders
     */
    createVipOrder(): void {
        const currentOrders = this.orders$.value;
        const newOrder: Order = {
            id: this.nextOrderId,
            type: OrderType.VIP,
            status: OrderStatus.PENDING,
            createdAt: new Date(),
        };

        const pendingOrders = currentOrders.filter(order => order.status === OrderStatus.PENDING);
        const nonPendingOrders = currentOrders.filter(order => order.status !== OrderStatus.PENDING);

        // Find insertion position: after existing VIP orders, before normal orders
        let insertIndex = 0;
        for (let i = pendingOrders.length - 1; i >= 0; i--) {
            if (pendingOrders[i].type === OrderType.VIP) {
                insertIndex = i + 1;
                break;
            }
        }

        const updatedPendingOrders = [...pendingOrders];
        updatedPendingOrders.splice(insertIndex, 0, newOrder);

        this.orders$.next([...updatedPendingOrders, ...nonPendingOrders]);
        this.nextOrderId++;
    }

    /**
     * Add new cooking bot
     * New bots default to idle status and can immediately accept orders
     */
    addBot(): void {
        const currentBots = this.bots$.value;
        const newBot: Bot = {
            id: this.nextBotId,
            status: BotStatus.IDLE,
        };

        this.bots$.next([...currentBots, newBot]);
        this.nextBotId++;
    }

    /**
     * Remove the most recently added bot
     * If the bot is processing an order, that order will be returned to the pending queue and the processing timer will be cancelled
     */
    removeBot(): void {
        const currentBots = this.bots$.value;
        if (currentBots.length === 0) return;

        const newestBot = currentBots[currentBots.length - 1];

        // If bot is processing an order, return the order to pending status and cancel timer
        if (newestBot.status === BotStatus.PROCESSING && newestBot.currentOrderId) {
            const orderId = newestBot.currentOrderId;

            // Cancel the processing timer for this order
            const timerId = this.orderTimers.get(orderId);
            if (timerId) {
                clearTimeout(timerId);
                this.orderTimers.delete(orderId);
            }

            const currentOrders = this.orders$.value;
            const updatedOrders = currentOrders.map(order =>
                order.id === orderId
                    ? { ...order, status: OrderStatus.PENDING, processingBotId: undefined }
                    : order
            );
            this.orders$.next(updatedOrders);
        }

        this.bots$.next(currentBots.slice(0, -1));
    }
    /**
     * Get pending orders list
     */
    getPendingOrders(): Order[] {
        return this.orders$.value.filter(order => order.status === OrderStatus.PENDING);
    }

    /**
     * Get processing orders list
     */
    getProcessingOrders(): Order[] {
        return this.orders$.value.filter(order => order.status === OrderStatus.PROCESSING);
    }

    /**
     * Get completed orders list
     */
    getCompletedOrders(): Order[] {
        return this.orders$.value.filter(order => order.status === OrderStatus.COMPLETE);
    }

    /**
     * Start order processing loop
     * Check every 100ms if there are idle bots and pending orders that can be matched
     */
    private startProcessingLoop(): void {
        // Check if in browser environment
        if (isPlatformBrowser(this.platformId)) {
            this.processingInterval = window.setInterval(() => {
                this.processOrders();
            }, 100);
        }
    }

    /**
     * Process order assignment logic
     * Assign idle bots to pending orders and complete orders after 10 seconds
     */
    private processOrders(): void {
        const currentBots = this.bots$.value;
        const currentOrders = this.orders$.value;

        const idleBots = currentBots.filter(bot => bot.status === BotStatus.IDLE);
        const pendingOrders = currentOrders.filter(order => order.status === OrderStatus.PENDING);

        // Assign pending orders to each idle bot
        idleBots.forEach((bot, index) => {
            if (index < pendingOrders.length) {
                const orderToProcess = pendingOrders[index];

                // Update bot status to processing
                const updatedBots = currentBots.map(b =>
                    b.id === bot.id
                        ? {
                            ...b,
                            status: BotStatus.PROCESSING,
                            currentOrderId: orderToProcess.id,
                            processingStartTime: new Date()
                        }
                        : b
                );
                this.bots$.next(updatedBots);

                // Update order status to processing
                const updatedOrders = currentOrders.map(order =>
                    order.id === orderToProcess.id
                        ? { ...order, status: OrderStatus.PROCESSING, processingBotId: bot.id }
                        : order
                );
                this.orders$.next(updatedOrders);

                // Complete order processing after 10 seconds
                const timerId = setTimeout(() => {
                    // Check if order is still processing (may have been cancelled)
                    const currentOrdersAtCompletion = this.orders$.value;
                    const currentBotsAtCompletion = this.bots$.value;

                    const orderStillProcessing = currentOrdersAtCompletion.find(
                        order => order.id === orderToProcess.id && order.status === OrderStatus.PROCESSING
                    );
                    const botStillExists = currentBotsAtCompletion.find(b => b.id === bot.id);

                    // Only complete order if it's still processing and bot still exists
                    if (orderStillProcessing && botStillExists) {
                        // Reset bot status to idle
                        const finalBots = this.bots$.value.map(b =>
                            b.id === bot.id
                                ? { ...b, status: BotStatus.IDLE, currentOrderId: undefined, processingStartTime: undefined }
                                : b
                        );
                        this.bots$.next(finalBots);

                        // Update order status to completed
                        const finalOrders = this.orders$.value.map(order =>
                            order.id === orderToProcess.id
                                ? { ...order, status: OrderStatus.COMPLETE }
                                : order
                        );
                        this.orders$.next(finalOrders);
                    }

                    // Clean up timer reference
                    this.orderTimers.delete(orderToProcess.id);
                }, 10000); // 10 seconds processing time

                // Store timer reference for cancellation
                this.orderTimers.set(orderToProcess.id, timerId);
            }
        });
    }

    /**
     * Clean up resources
     * Called when component is destroyed, clear timers to prevent memory leaks
     */
    ngOnDestroy(): void {
        if (this.processingInterval) {
            clearInterval(this.processingInterval);
        }

        // Clean up all order processing timers
        this.orderTimers.forEach(timerId => {
            clearTimeout(timerId);
        });
        this.orderTimers.clear();
    }
}
