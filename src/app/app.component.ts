import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div class="app-container">
      <app-order-controller></app-order-controller>
    </div>
  `,
    styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent {
    title = 'mcdonalds-order-controller';
}
