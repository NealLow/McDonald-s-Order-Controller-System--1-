# McDonald's Order Controller

An Angular application with ng-zorro UI components for managing McDonald's automated cooking bot orders.

## Features

- **Order Management**: Create normal and VIP orders with unique, increasing order numbers
- **VIP Priority Queue**: VIP orders are processed before normal orders but maintain order among themselves
- **Bot Management**: Add/remove cooking bots that automatically process orders
- **Real-time Processing**: Each bot processes orders for 10 seconds with live status updates
- **Type Safety**: Full TypeScript support with enums for better code quality
- **Responsive UI**: Clean, modern interface using ng-zorro components
- **Memory Management**: Proper cleanup to prevent memory leaks

## Recent Optimizations

- **Type Safety**: Replaced string literals with TypeScript enums
- **Memory Management**: Implemented proper RxJS subscription cleanup
- **Performance**: Added trackBy functions for efficient DOM updates
- **Code Quality**: Centralized constants and improved maintainability

## Requirements

- Node.js (v18 or higher)
- Angular CLI (v18 or higher)

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Angular CLI globally** (if not already installed):
   ```bash
   npm install -g @angular/cli
   ```

3. **Start the development server**:
   ```bash
   ng serve
   ```
   or
   ```bash
   npm start
   ```

4. **Open in browser**:
   Navigate to `http://localhost:4200`

## Usage

1. **Create Orders**:
   - Click "New Normal Order" to add a regular order
   - Click "New VIP Order" to add a priority order

2. **Manage Bots**:
   - Click "Add Bot" to add a new cooking bot
   - Click "Remove Bot" to remove the newest bot

3. **Order Processing**:
   - Bots automatically pick up pending orders
   - Processing takes 10 seconds per order
   - VIP orders are prioritized but maintain their queue order
   - Completed orders appear in the COMPLETE section

## website url - https://feedmeassignment.z23.web.core.windows.net/

## Architecture

- **Angular 18** with standalone components
- **ng-zorro-antd** for UI components
- **TypeScript** with strict type checking
- **RxJS** for reactive programming with real-time updates
- **Enum-based constants** for better type safety
- **Component-based architecture** for maintainability

## Technical Optimization
### Priority Improvements
1. **Concurrency Control**: Thread-safe queue management
2. **Configuration Management**: Externalize system parameters
3. **Error Handling**: Comprehensive error recovery mechanisms
4. **Auto-scaling**: Dynamic bot count adjustment
5. **Performance Metrics**: System throughput monitoring
6. **Advanced UI Features**: Notifications and progress indicators

### Scalability Concerns
- **Memory Growth**: Order history accumulation requires pagination/cleanup
- **DOM Performance**: Large order lists need virtual scrolling
- **Browser Limits**: Local storage size constraints (5-10MB)
- **CPU Usage**: Continuous polling impacts battery life

### Concurrency & State Management
- **Multi-tab Sync**: No synchronization between browser instances
- **State Validation**: Missing state transition validation
- **Atomic Operations**: Potential race conditions in order assignment
- **Transaction Safety**: No rollback mechanism for failed operations

### Performance Bottlenecks
- **Change Detection**: Frequent updates trigger excessive re-renders
- **Memory Usage**: Complex object graphs for order data
- **Bundle Optimization**: Lazy loading and tree shaking opportunities

### Architecture Enhancements
- **Microservices**: Transition from monolithic frontend structure
- **Real-time Updates**: WebSocket implementation for live data
- **Offline Support**: Progressive Web App (PWA) capabilities

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

---

*This system demonstrates modern Angular development practices with a focus on type safety, performance, and maintainability.*

## FeedMe Software Engineer Take Home Assignment
Below is a take home assignment before the interview of the position. You are required to
1. Understand the situation and use case. You may contact the interviewer for further clarification.
2. Fork this repo and implement the requirement with your most familiar tools.
3. Complete the requirement and perform your own testing.
4. Provide documentation for the any part that you think is needed.
5. Commit into your own github and share your repo with the interviewer.
6. Bring the source code and functioning prototype to the interview session.

### Situation
McDonald is transforming their business during COVID-19. They wish to build the automated cooking bots to reduce workforce and increase their efficiency. As one of the software engineer in the project. You task is to create an order controller which handle the order control flow. 

### User Story
As below is part of the user story:
1. As McDonald's normal customer, after I submitted my order, I wish to see my order flow into "PENDING" area. After the cooking bot process my order, I want to see it flow into to "COMPLETE" area.
2. As McDonald's VIP member, after I submitted my order, I want my order being process first before all order by normal customer.  However if there's existing order from VIP member, my order should queue behind his/her order.
3. As McDonald's manager, I want to increase or decrease number of cooking bot available in my restaurant. When I increase a bot, it should immediately process any pending order. When I decrease a bot, the processing order should remain un-process.
4. As McDonald bot, it can only pickup and process 1 order at a time, each order required 10 seconds to complete process.

### Requirements
1. When "New Normal Order" clicked, a new order should show up "PENDING" Area.
2. When "New VIP Order" clicked, a new order should show up in "PENDING" Area. It should place in-front of all existing "Normal" order but behind of all existing "VIP" order.
3. The order number should be unique and increasing.
4. When "+ Bot" clicked, a bot should be created and start processing the order inside "PENDING" area. after 10 seconds picking up the order, the order should move to "COMPLETE" area. Then the bot should start processing another order if there is any left in "PENDING" area.
5. If there is no more order in the "PENDING" area, the bot should become IDLE until a new order come in.
6. When "- Bot" clicked, the newest bot should be destroyed. If the bot is processing an order, it should also stop the process. The order now back to "PENDING" and ready to process by other bot.
7. No data persistance is needed for this prototype, you may perform all the process inside memory.

### Functioning Prototype
You may demostrate your final funtioning prototype with **one and only one** of the following method:
- CLI application
- UI application
- E2E test case

### Tips on completing this task
- Testing, testing and testing. Make sure the prototype is functioning and meeting all the requirements.
- Do not over engineering. Try to scope your working hour within 3 hours (1 hour per day). You may document all the optimization or technology concern that you think good to bring in the solution.
- Complete the implementation as clean as possible, clean code is a strong plus point, do not bring in all the fancy tech stuff.
