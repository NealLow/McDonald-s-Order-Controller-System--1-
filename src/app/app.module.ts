import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { OrderControllerComponent } from './components/order-controller/order-controller.component';

import {
    PlusOutline,
    MinusOutline,
    CrownOutline,
    RobotOutline,
    ClockCircleOutline,
    CheckCircleOutline,
    HourglassOutline,
    ShoppingOutline,
    UserOutline,
    TeamOutline,
    LoadingOutline,
    CheckOutline,
    SyncOutline,
    FileTextOutline
} from '@ant-design/icons-angular/icons';

const icons = [
    PlusOutline,
    MinusOutline,
    CrownOutline,
    RobotOutline,
    ClockCircleOutline,
    CheckCircleOutline,
    HourglassOutline,
    ShoppingOutline,
    UserOutline,
    TeamOutline,
    LoadingOutline,
    CheckOutline,
    SyncOutline,
    FileTextOutline
];

@NgModule({
    declarations: [
        AppComponent,
        OrderControllerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NzCardModule,
        NzButtonModule,
        NzTagModule,
        NzIconModule.forRoot(icons)
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
