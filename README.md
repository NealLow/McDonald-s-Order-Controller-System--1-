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