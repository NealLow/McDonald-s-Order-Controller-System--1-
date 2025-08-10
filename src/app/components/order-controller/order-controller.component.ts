import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order, Bot, OrderType, OrderStatus, BotStatus } from '../../models/order.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-order-controller',
    templateUrl: './order-controller.component.html',
    styleUrls: ['./order-controller.component.scss']
})
export class OrderControllerComponent implements OnInit, OnDestroy {
    orders: Order[] = [];
    bots: Bot[] = [];

    // Expose enums to template
    readonly OrderType = OrderType;
    readonly OrderStatus = OrderStatus;
    readonly BotStatus = BotStatus;

    private destroy$ = new Subject<void>();

    constructor(
        private orderService: OrderService
    ) { }

    ngOnInit(): void {
        // Subscribe to orders
        this.orderService.getOrders()
            .pipe(takeUntil(this.destroy$))
            .subscribe(orders => {
                this.orders = orders;
            });

        // Subscribe to bots
        this.orderService.getBots()
            .pipe(takeUntil(this.destroy$))
            .subscribe(bots => {
                this.bots = bots;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    // Getters for filtered orders
    get pendingOrders(): Order[] {
        return this.orders.filter(order => order.status === OrderStatus.PENDING);
    }

    get processingOrders(): Order[] {
        return this.orders.filter(order => order.status === OrderStatus.PROCESSING);
    }

    get completedOrders(): Order[] {
        return this.orders.filter(order => order.status === OrderStatus.COMPLETE).reverse();
    }

    // Order creation methods
    createNormalOrder(): void {
        this.orderService.createNormalOrder();
    }

    createVipOrder(): void {
        this.orderService.createVipOrder();
    }

    // Bot management methods
    addBot(): void {
        this.orderService.addBot();
    }

    removeBot(): void {
        this.orderService.removeBot();
    }

    // Helper methods for UI
    getBotStatusColor(status: BotStatus): string {
        switch (status) {
            case BotStatus.IDLE: return 'default';
            case BotStatus.PROCESSING: return 'blue';
            default: return 'default';
        }
    }

    getBotStatusText(status: BotStatus): string {
        switch (status) {
            case BotStatus.IDLE: return 'Idle';
            case BotStatus.PROCESSING: return 'Working';
            default: return status;
        }
    }

    getBotIcon(status: BotStatus): string {
        switch (status) {
            case BotStatus.IDLE: return 'check-circle';
            case BotStatus.PROCESSING: return 'sync';
            default: return 'robot';
        }
    }

    getActiveBots(): number {
        return this.bots.filter(bot => bot.status === BotStatus.IDLE || bot.status === BotStatus.PROCESSING).length;
    }

    formatBotId(id: number): string {
        return id.toString().padStart(3, '0');
    }

    getOrderTypeColor(type: OrderType): string {
        switch (type) {
            case OrderType.VIP: return 'gold';
            case OrderType.NORMAL: return 'default';
            default: return 'default';
        }
    }

    // Track by functions for performance
    trackOrderById(index: number, order: Order): number {
        return order.id;
    }

    trackBotById(index: number, bot: Bot): number {
        return bot.id;
    }
}
