"use strict";
(self["webpackChunkmcdonalds_order_controller"] = self["webpackChunkmcdonalds_order_controller"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_order_controller_order_controller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/order-controller/order-controller.component */ 689);


class AppComponent {
  constructor() {
    this.title = 'mcdonalds-order-controller';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-order-controller");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_components_order_controller_order_controller_component__WEBPACK_IMPORTED_MODULE_0__.OrderControllerComponent],
      styles: [".app-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      background-color: #f5f5f5;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO0lBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmFwcC1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);
/* harmony import */ var _components_order_controller_order_controller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/order-controller/order-controller.component */ 689);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



// ng-zorro modules - 只导入必要的模块




// Components

// Icons - 只导入实际使用的图标



const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.PlusOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.MinusOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.CrownOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RobotOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.ClockCircleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.HourglassOutline];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
      // ng-zorro modules - 移除未使用的模块
      ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__.NzTagModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconModule.forRoot(icons)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_order_controller_order_controller_component__WEBPACK_IMPORTED_MODULE_1__.OrderControllerComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
    // ng-zorro modules - 移除未使用的模块
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__.NzTagModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconModule]
  });
})();

/***/ }),

/***/ 689:
/*!***************************************************************************!*\
  !*** ./src/app/components/order-controller/order-controller.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderControllerComponent: () => (/* binding */ OrderControllerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/order.service */ 8674);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);











function OrderControllerComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No cooking robots deployed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add robots to start processing orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OrderControllerComponent_div_36_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bot_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Processing Order #", bot_r1.currentOrderId, "");
  }
}
function OrderControllerComponent_div_36_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Idle - Ready for orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OrderControllerComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-tag", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrderControllerComponent_div_36_div_1_div_11_Template, 4, 1, "div", 39)(12, OrderControllerComponent_div_36_div_1_div_12_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bot_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "bot-" + bot_r1.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r1.getBotIcon(bot_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Robot ", bot_r1.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx_r1.formatBotId(bot_r1.id), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r1.getBotStatusColor(bot_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getBotStatusText(bot_r1.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bot_r1.currentOrderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bot_r1.status === "IDLE");
  }
}
function OrderControllerComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderControllerComponent_div_36_div_1_Template, 13, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.bots)("ngForTrackBy", ctx_r1.trackBotById);
  }
}
function OrderControllerComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No pending orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OrderControllerComponent_div_40_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Assigned to Robot #", order_r3.processingBotId, "");
  }
}
function OrderControllerComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55)(9, "nz-tag", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-tag", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " PROCESSING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59)(16, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderControllerComponent_div_40_div_1_p_21_Template, 4, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r1.getOrderTypeColor(order_r3.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", order_r3.type === "VIP" ? "crown" : "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r3.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 6, order_r3.createdAt, "mediumTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r3.processingBotId);
  }
}
function OrderControllerComponent_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55)(9, "nz-tag", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-tag", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59)(16, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Waiting for available robot...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r1.getOrderTypeColor(order_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", order_r4.type === "VIP" ? "crown" : "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r4.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 5, order_r4.createdAt, "mediumTime"), "");
  }
}
function OrderControllerComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderControllerComponent_div_40_div_1_Template, 22, 9, "div", 46)(2, OrderControllerComponent_div_40_div_2_Template, 25, 8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.processingOrders)("ngForTrackBy", ctx_r1.trackOrderById);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.pendingOrders)("ngForTrackBy", ctx_r1.trackOrderById);
  }
}
function OrderControllerComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No completed orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OrderControllerComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55)(9, "nz-tag", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-tag", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " COMPLETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59)(16, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ready for pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx_r1.getOrderTypeColor(order_r5.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", order_r5.type === "VIP" ? "crown" : "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r5.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Completed: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 5, order_r5.createdAt, "mediumTime"), "");
  }
}
function OrderControllerComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderControllerComponent_div_43_div_1_Template, 25, 8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.completedOrders)("ngForTrackBy", ctx_r1.trackOrderById);
  }
}
class OrderControllerComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.orders = [];
    this.bots = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    // Subscribe to orders
    this.orderService.getOrders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(orders => {
      this.orders = orders;
    });
    // Subscribe to bots
    this.orderService.getBots().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(bots => {
      this.bots = bots;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Getters for filtered orders
  get pendingOrders() {
    return this.orders.filter(order => order.status === 'PENDING');
  }
  get processingOrders() {
    return this.orders.filter(order => order.status === 'PROCESSING');
  }
  get completedOrders() {
    return this.orders.filter(order => order.status === 'COMPLETE').reverse();
  }
  // Order creation methods
  createNormalOrder() {
    this.orderService.createNormalOrder();
  }
  createVipOrder() {
    this.orderService.createVipOrder();
  }
  // Bot management methods
  addBot() {
    this.orderService.addBot();
  }
  removeBot() {
    this.orderService.removeBot();
  }
  // Helper methods for UI
  getBotStatusColor(status) {
    switch (status) {
      case 'IDLE':
        return 'default';
      case 'PROCESSING':
        return 'blue';
      default:
        return 'default';
    }
  }
  getBotStatusText(status) {
    switch (status) {
      case 'IDLE':
        return 'Idle';
      case 'PROCESSING':
        return 'Working';
      default:
        return status;
    }
  }
  getBotIcon(status) {
    switch (status) {
      case 'IDLE':
        return 'check-circle';
      case 'PROCESSING':
        return 'sync';
      default:
        return 'robot';
    }
  }
  getActiveBots() {
    return this.bots.filter(bot => bot.status === 'IDLE' || bot.status === 'PROCESSING').length;
  }
  formatBotId(id) {
    return id.toString().padStart(3, '0');
  }
  getOrderTypeColor(type) {
    switch (type) {
      case 'VIP':
        return 'gold';
      case 'NORMAL':
        return 'default';
      default:
        return 'default';
    }
  }
  // Track by functions for performance
  trackOrderById(index, order) {
    return order.id;
  }
  trackBotById(index, bot) {
    return bot.id;
  }
  static {
    this.ɵfac = function OrderControllerComponent_Factory(t) {
      return new (t || OrderControllerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderControllerComponent,
      selectors: [["app-order-controller"]],
      decls: 44,
      vars: 10,
      consts: [[1, "container"], [1, "header"], [1, "subtitle"], ["nzTitle", "Control Panel", 1, "control-panel"], [1, "controls"], ["nz-button", "", "nzType", "default", 1, "control-btn", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "btn-text"], ["nz-button", "", "nzType", "default", 1, "control-btn", "vip-button", 3, "click"], ["nz-icon", "", "nzType", "crown", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", 1, "control-btn", 3, "click"], ["nz-button", "", "nzType", "default", "nzDanger", "", 1, "control-btn", 3, "click", "disabled"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"], [1, "bot-management"], ["nz-card-head", ""], [1, "bot-title-section"], [1, "bot-title-main"], ["nz-icon", "", "nzType", "robot", "nzTheme", "outline", 1, "title-icon"], [1, "title-text"], [1, "bot-summary"], [1, "summary-item"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["class", "empty-state", 4, "ngIf"], ["class", "bots-grid", 4, "ngIf"], [1, "orders-section"], [1, "orders-card", 3, "nzTitle"], ["class", "orders-list", 4, "ngIf"], [1, "empty-state"], ["nz-icon", "", "nzType", "robot", "nzTheme", "outline", 1, "empty-icon"], [1, "bots-grid"], ["class", "bot-card", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bot-card", 3, "ngClass"], [1, "bot-header"], [1, "bot-info"], [1, "bot-name"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "bot-id"], [1, "bot-status-tag", 3, "nzColor"], [1, "bot-body"], ["class", "bot-current-order", 4, "ngIf"], ["class", "bot-ready", 4, "ngIf"], [1, "bot-current-order"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "outline"], [1, "bot-ready"], ["nz-icon", "", "nzType", "hourglass", "nzTheme", "outline", 1, "empty-icon"], [1, "orders-list"], ["class", "order-card processing", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "order-card pending", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "order-card", "processing"], [1, "order-content"], [1, "order-info"], [1, "order-header"], [1, "order-id-section"], ["nz-icon", "", "nzType", "shopping", "nzTheme", "outline", 1, "order-icon"], [1, "order-id"], [1, "order-tags"], [1, "order-type-tag", 3, "nzColor"], ["nzColor", "processing", 1, "order-status-tag"], ["nz-icon", "", "nzType", "loading", "nzTheme", "outline", "nzSpin", ""], [1, "order-details"], [1, "order-time"], ["class", "order-bot", 4, "ngIf"], [1, "order-bot"], ["nz-icon", "", "nzType", "robot", "nzTheme", "outline"], [1, "order-card", "pending"], ["nzColor", "default", 1, "order-status-tag"], ["nz-icon", "", "nzType", "hourglass", "nzTheme", "outline"], [1, "order-waiting"], ["nz-icon", "", "nzType", "team", "nzTheme", "outline"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 1, "empty-icon"], ["class", "order-card completed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "order-card", "completed"], ["nzColor", "success", 1, "order-status-tag"], [1, "order-success"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"]],
      template: function OrderControllerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "McDonald's Order Controller");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Automated cooking bot order management system");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-card", 3)(7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderControllerComponent_Template_button_click_8_listener() {
            return ctx.createNormalOrder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Normal Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderControllerComponent_Template_button_click_12_listener() {
            return ctx.createVipOrder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "VIP Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderControllerComponent_Template_button_click_16_listener() {
            return ctx.addBot();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add Bot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderControllerComponent_Template_button_click_20_listener() {
            return ctx.removeBot();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Remove Bot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-card", 13)(25, "div", 14)(26, "div", 15)(27, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cooking Robots");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19)(32, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, OrderControllerComponent_div_35_Template, 6, 0, "div", 22)(36, OrderControllerComponent_div_36_Template, 2, 2, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24)(38, "nz-card", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OrderControllerComponent_div_39_Template, 4, 0, "div", 22)(40, OrderControllerComponent_div_40_Template, 3, 4, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-card", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, OrderControllerComponent_div_42_Template, 4, 0, "div", 22)(43, OrderControllerComponent_div_43_Template, 2, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.bots.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Active: ", ctx.getActiveBots(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bots.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bots.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "PENDING Orders (" + (ctx.pendingOrders.length + ctx.processingOrders.length) + ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pendingOrders.length === 0 && ctx.processingOrders.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pendingOrders.length > 0 || ctx.processingOrders.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", "COMPLETE Orders (" + ctx.completedOrders.length + ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.completedOrders.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.completedOrders.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__.NzTagComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-width: 100%;\n  margin: 0 auto;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    padding: 24px;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #1f2937;\n  line-height: 1.2;\n}\n@media (min-width: 640px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n}\n@media (min-width: 1024px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n}\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n@media (min-width: 640px) {\n  .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.control-panel[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 640px) {\n  .controls[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    max-width: 400px;\n    margin: 0 auto;\n  }\n}\n@media (min-width: 1024px) {\n  .controls[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    max-width: 600px;\n  }\n}\n\n.control-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 0.75rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 0 6px;\n}\n@media (min-width: 640px) {\n  .control-btn[_ngcontent-%COMP%] {\n    height: 52px;\n    font-size: 0.875rem;\n    gap: 8px;\n  }\n}\n@media (min-width: 1024px) {\n  .control-btn[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0 16px;\n  }\n}\n.control-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: inherit;\n  font-weight: 500;\n}\n@media (min-width: 640px) {\n  .control-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n@media (min-width: 1024px) {\n  .control-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.control-btn.vip-button[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n  color: #92400e;\n}\n.control-btn.vip-button[_ngcontent-%COMP%]:hover {\n  background-color: #fde68a;\n  border-color: #d97706;\n  color: #92400e;\n}\n.control-btn.vip-button[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  color: #92400e !important;\n  font-weight: 600;\n}\n.control-btn.vip-button[_ngcontent-%COMP%]:hover   .btn-text[_ngcontent-%COMP%] {\n  color: #92400e !important;\n}\n\n.bot-management[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-title-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-title-main[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #3b82f6;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-title-main[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-title-main[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 4px;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-summary[_ngcontent-%COMP%]   .summary-item.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.bot-management[_ngcontent-%COMP%]   .bot-title-section[_ngcontent-%COMP%]   .bot-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  text-align: center;\n  padding: 20px;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 8px;\n  opacity: 0.5;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  margin-top: 4px;\n  display: block;\n}\n\n.bots-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n@media (min-width: 640px) {\n  .bots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .bots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n  }\n}\n@media (min-width: 1280px) {\n  .bots-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.bot-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  background-color: #f9fafb;\n  margin-bottom: 0;\n  position: relative;\n  overflow: hidden;\n}\n@media (min-width: 1024px) {\n  .bot-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.bot-card.bot-idle[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n  background-color: #f6ffed;\n}\n.bot-card.bot-processing[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n  background-color: #e6f7ff;\n}\n.bot-card.bot-processing[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #3b82f6, transparent);\n  animation: _ngcontent-%COMP%_processing 2s infinite;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-header[_ngcontent-%COMP%]   .bot-info[_ngcontent-%COMP%]   .bot-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #1f2937;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-header[_ngcontent-%COMP%]   .bot-info[_ngcontent-%COMP%]   .bot-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-header[_ngcontent-%COMP%]   .bot-info[_ngcontent-%COMP%]   .bot-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: block;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-header[_ngcontent-%COMP%]   .bot-status-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-body[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-body[_ngcontent-%COMP%]   .bot-current-order[_ngcontent-%COMP%], \n.bot-card[_ngcontent-%COMP%]   .bot-body[_ngcontent-%COMP%]   .bot-ready[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  gap: 4px;\n  font-size: 0.75rem;\n  padding: 4px 6px;\n  border-radius: 6px;\n  margin-top: 4px;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-body[_ngcontent-%COMP%]   .bot-current-order[_ngcontent-%COMP%] {\n  background-color: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n.bot-card[_ngcontent-%COMP%]   .bot-body[_ngcontent-%COMP%]   .bot-ready[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.orders-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 640px) {\n  .orders-section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n@media (min-width: 640px) {\n  .orders-section[_ngcontent-%COMP%]   .orders-card[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    width: calc(50% - 20px);\n  }\n}\n\n.orders-list[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 400px;\n  overflow-y: overlay;\n  scrollbar-width: thin;\n}\n@media (min-width: 640px) {\n  .orders-list[_ngcontent-%COMP%] {\n    max-height: 500px;\n  }\n}\n@media (min-width: 1024px) {\n  .orders-list[_ngcontent-%COMP%] {\n    max-height: 600px;\n  }\n}\n.orders-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.orders-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.orders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.orders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.order-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  margin-bottom: 16px;\n  position: relative;\n  overflow: hidden;\n}\n@media (min-width: 1024px) {\n  .order-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.order-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.order-card.pending[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-left: 4px solid #9ca3af;\n}\n.order-card.pending[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #9ca3af, transparent);\n  animation: _ngcontent-%COMP%_waiting 3s infinite;\n}\n.order-card.processing[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n  border-left: 4px solid #3b82f6;\n}\n.order-card.processing[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: linear-gradient(90deg, transparent, #3b82f6, transparent);\n  animation: _ngcontent-%COMP%_processing 1.5s infinite;\n}\n.order-card.completed[_ngcontent-%COMP%] {\n  background-color: #f6ffed;\n  border-left: 4px solid #10b981;\n}\n.order-card.completed[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 24px;\n  height: 24px;\n  background-color: #10b981;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.order-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n@media (min-width: 640px) {\n  .order-content[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n\n.order-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.order-header[_ngcontent-%COMP%]   .order-id-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.order-header[_ngcontent-%COMP%]   .order-id-section[_ngcontent-%COMP%]   .order-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #3b82f6;\n}\n.order-header[_ngcontent-%COMP%]   .order-id-section[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #1f2937;\n}\n.order-header[_ngcontent-%COMP%]   .order-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.order-header[_ngcontent-%COMP%]   .order-tags[_ngcontent-%COMP%]   .order-type-tag[_ngcontent-%COMP%], \n.order-header[_ngcontent-%COMP%]   .order-tags[_ngcontent-%COMP%]   .order-status-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.order-header[_ngcontent-%COMP%]   .order-tags[_ngcontent-%COMP%]   .order-type-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.order-header[_ngcontent-%COMP%]   .order-tags[_ngcontent-%COMP%]   .order-status-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.order-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.order-details[_ngcontent-%COMP%]   .order-time[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-bot[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-waiting[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-success[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: flex-start;\n  gap: 4px;\n  padding: 4px 0;\n}\n.order-details[_ngcontent-%COMP%]   .order-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-bot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-waiting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.order-details[_ngcontent-%COMP%]   .order-success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.order-details[_ngcontent-%COMP%]   .order-success[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n\n[_nghost-%COMP%]     .ant-card {\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]     .ant-card .ant-card-head {\n  padding: 16px 16px;\n  border-bottom: 1px solid #f3f4f6;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]     .ant-card .ant-card-head {\n    padding: 16px 20px;\n  }\n}\n@media (min-width: 1024px) {\n  [_nghost-%COMP%]     .ant-card .ant-card-head {\n    padding: 20px 20px;\n  }\n}\n[_nghost-%COMP%]     .ant-card .ant-card-head .ant-card-head-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]     .ant-card .ant-card-head .ant-card-head-title {\n    font-size: 1.125rem;\n  }\n}\n[_nghost-%COMP%]     .ant-card .ant-card-body {\n  padding: 16px;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]     .ant-card .ant-card-body {\n    padding: 20px;\n  }\n}\n@media (min-width: 1024px) {\n  [_nghost-%COMP%]     .ant-card .ant-card-body {\n    padding: 20px;\n  }\n}\n[_nghost-%COMP%]     .ant-btn {\n  height: 40px;\n  border-radius: 8px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-width: auto;\n  color: #1f2937;\n}\n[_nghost-%COMP%]     .ant-btn .btn-text {\n  color: inherit;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-primary {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-primary:hover {\n  background-color: #2563eb;\n  border-color: #2563eb;\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-primary .btn-text {\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-primary:hover .btn-text {\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous {\n  background-color: #ef4444;\n  border-color: #ef4444;\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous:hover {\n  background-color: #dc2626;\n  border-color: #dc2626;\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous:disabled {\n  background-color: #e5e7eb;\n  border-color: #e5e7eb;\n  color: #9ca3af !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous .btn-text {\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous:hover .btn-text {\n  color: white !important;\n}\n[_nghost-%COMP%]     .ant-btn.ant-btn-dangerous:disabled .btn-text {\n  color: #9ca3af !important;\n}\n[_nghost-%COMP%]     .ant-tag {\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 2px 8px;\n  line-height: 1.4;\n}\n\n@keyframes _ngcontent-%COMP%_processing {\n  0% {\n    transform: translateX(-100%);\n  }\n  50% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_waiting {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uL01jRG9uYWxkJ3MlMjBPcmRlciUyMENvbnRyb2xsZXIlMjBTeXN0ZW0lMjAoMSkvc3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWNvbnRyb2xsZXIvb3JkZXItY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1jb250cm9sbGVyL29yZGVyLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDaUdoQjtFQUNJLGFBMUVTO0VBMkVULGVBQUE7RUFDQSxjQUFBO0FEL0ZKO0FDMEVJO0VBa0JKO0lBTVEsYUE5RUs7RURoQlg7QUFDRjtBQzJFSTtFQVlKO0lBVVEsaUJBQUE7SUFDQSxhQWxGTTtFRFhaO0FBQ0Y7O0FDaUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkExRlM7QURKYjtBQ2dHSTtFQUNJLGlCQXJGUTtFQXNGUixnQkFoRmU7RUFpRmYsa0JBbEdFO0VBbUdGLGNBM0dHO0VBNEdILGdCQWpGWTtBRGJwQjtBQ21ESTtFQXNDQTtJQVFRLG1CQTNGSTtFREZkO0FBQ0Y7QUNvREk7RUFnQ0E7SUFZUSxrQkE5Rkk7RURFZDtBQUNGO0FDK0ZJO0VBQ0ksY0F6SEc7RUEwSEgsbUJBMUdPO0FEYWY7QUNxQ0k7RUFzREE7SUFLUSxlQTVHSztFRGdCZjtBQUNGOztBQ2lHQTtFQUNJLG1CQXhIUztBRDBCYjs7QUNpR0E7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQWhJUztBRGtDYjtBQ3NCSTtFQXFFSjtJQU1RLHFDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VEN0ZOO0FBQ0Y7QUNxQkk7RUErREo7SUFZUSxxQ0FBQTtJQUNBLGdCQUFBO0VENUZOO0FBQ0Y7O0FDK0ZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkE1SVc7RUE2SVgsa0JBeEpZO0VBZ0NaLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VB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MEdRO0VBQ0kseUJBdnJCRztFQXdyQkgscUJBeHJCRztFQXlyQkgsdUJBQUE7QUR4R1o7QUMwR1k7RUFDSSx5QkEzckJEO0VBNHJCQyxxQkE1ckJEO0VBNnJCQyx1QkFBQTtBRHhHaEI7QUMyR1k7RUFDSSx5QkExckJMO0VBMnJCSyxxQkEzckJMO0VBNHJCSyx5QkFBQTtBRHpHaEI7QUM0R1k7RUFDSSx1QkFBQTtBRDFHaEI7QUM2R1k7RUFDSSx1QkFBQTtBRDNHaEI7QUM4R1k7RUFDSSx5QkFBQTtBRDVHaEI7QUNpSEk7RUFDSSxrQkF6c0JXO0VBMHNCWCxrQkE5ckJPO0VBK3JCUCxnQkFyckJhO0VBc3JCYixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRC9HUjs7QUNvSEE7RUFDSTtJQUNJLDRCQUFBO0VEakhOO0VDb0hFO0lBQ0kseUJBQUE7RURsSE47RUNxSEU7SUFDSSwyQkFBQTtFRG5ITjtBQUNGO0FDc0hBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLFlBQUE7RURwSE47RUN1SEU7SUFDSSx5QkFBQTtJQUNBLFVBQUE7RURySE47RUN3SEU7SUFDSSwyQkFBQTtJQUNBLFlBQUE7RUR0SE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICB9XG59XG4uaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNvbnRyb2wtcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAxMnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5jb250cm9scyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250cm9scyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5cbi5jb250cm9sLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5jb250cm9sLWJ0biB7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZ2FwOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRyb2wtYnRuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG59XG4uY29udHJvbC1idG4gLmJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRyb2wtYnRuIC5idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuY29udHJvbC1idG4gLmJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi5jb250cm9sLWJ0bi52aXAtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcbiAgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiO1xuICBjb2xvcjogIzkyNDAwZTtcbn1cbi5jb250cm9sLWJ0bi52aXAtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTY4YTtcbiAgYm9yZGVyLWNvbG9yOiAjZDk3NzA2O1xuICBjb2xvcjogIzkyNDAwZTtcbn1cbi5jb250cm9sLWJ0bi52aXAtYnV0dG9uIC5idG4tdGV4dCB7XG4gIGNvbG9yOiAjOTI0MDBlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udHJvbC1idG4udmlwLWJ1dHRvbjpob3ZlciAuYnRuLXRleHQge1xuICBjb2xvcjogIzkyNDAwZSAhaW1wb3J0YW50O1xufVxuXG4uYm90LW1hbmFnZW1lbnQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvdC1tYW5hZ2VtZW50IC5ib3QtdGl0bGUtc2VjdGlvbiAuYm90LXRpdGxlLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmJvdC1tYW5hZ2VtZW50IC5ib3QtdGl0bGUtc2VjdGlvbiAuYm90LXRpdGxlLW1haW4gLnRpdGxlLWljb24ge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogIzNiODJmNjtcbn1cbi5ib3QtbWFuYWdlbWVudCAuYm90LXRpdGxlLXNlY3Rpb24gLmJvdC10aXRsZS1tYWluIC50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG4uYm90LW1hbmFnZW1lbnQgLmJvdC10aXRsZS1zZWN0aW9uIC5ib3QtdGl0bGUtbWFpbiAuY291bnQtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBiOTgxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvdC1tYW5hZ2VtZW50IC5ib3QtdGl0bGUtc2VjdGlvbiAuYm90LXN1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5ib3QtbWFuYWdlbWVudCAuYm90LXRpdGxlLXNlY3Rpb24gLmJvdC1zdW1tYXJ5IC5zdW1tYXJ5LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuLmJvdC1tYW5hZ2VtZW50IC5ib3QtdGl0bGUtc2VjdGlvbiAuYm90LXN1bW1hcnkgLnN1bW1hcnktaXRlbS5lcnJvciB7XG4gIGNvbG9yOiAjZWY0NDQ0O1xufVxuLmJvdC1tYW5hZ2VtZW50IC5ib3QtdGl0bGUtc2VjdGlvbiAuYm90LXN1bW1hcnkgLnN1bW1hcnktaXRlbSBpIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgY29sb3I6ICM5Y2EzYWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZW1wdHktc3RhdGUgLmVtcHR5LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVtcHR5LXN0YXRlIHAge1xuICBtYXJnaW46IDA7XG59XG4uZW1wdHktc3RhdGUgc21hbGwge1xuICBjb2xvcjogIzljYTNhZjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm90cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMTZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuYm90cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYm90cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuYm90cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG59XG5cbi5ib3QtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuYm90LWNhcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbi5ib3QtY2FyZC5ib3QtaWRsZSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEwYjk4MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmZlZDtcbn1cbi5ib3QtY2FyZC5ib3QtcHJvY2Vzc2luZyB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzNiODJmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcbn1cbi5ib3QtY2FyZC5ib3QtcHJvY2Vzc2luZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgIzNiODJmNiwgdHJhbnNwYXJlbnQpO1xuICBhbmltYXRpb246IHByb2Nlc3NpbmcgMnMgaW5maW5pdGU7XG59XG4uYm90LWNhcmQgLmJvdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5ib3QtY2FyZCAuYm90LWhlYWRlciAuYm90LWluZm8gLmJvdC1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzFmMjkzNztcbn1cbi5ib3QtY2FyZCAuYm90LWhlYWRlciAuYm90LWluZm8gLmJvdC1uYW1lIGkge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYm90LWNhcmQgLmJvdC1oZWFkZXIgLmJvdC1pbmZvIC5ib3QtaWQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjOWNhM2FmO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJvdC1jYXJkIC5ib3QtaGVhZGVyIC5ib3Qtc3RhdHVzLXRhZyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHB4O1xufVxuLmJvdC1jYXJkIC5ib3QtYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5ib3QtY2FyZCAuYm90LWJvZHkgLmJvdC1jdXJyZW50LW9yZGVyLFxuLmJvdC1jYXJkIC5ib3QtYm9keSAuYm90LXJlYWR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uYm90LWNhcmQgLmJvdC1ib2R5IC5ib3QtY3VycmVudC1vcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xuICBjb2xvcjogIzNiODJmNjtcbn1cbi5ib3QtY2FyZCAuYm90LWJvZHkgLmJvdC1yZWFkeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xuICBjb2xvcjogIzEwYjk4MTtcbn1cblxuLm9yZGVycy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5vcmRlcnMtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAub3JkZXJzLXNlY3Rpb24gLm9yZGVycy1jYXJkIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgfVxufVxuXG4ub3JkZXJzLWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAub3JkZXJzLWxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5vcmRlcnMtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gIH1cbn1cbi5vcmRlcnMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuLm9yZGVycy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm9yZGVycy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm9yZGVycy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm9yZGVyLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLm9yZGVyLWNhcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbi5vcmRlci1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm9yZGVyLWNhcmQucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzljYTNhZjtcbn1cbi5vcmRlci1jYXJkLnBlbmRpbmc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICM5Y2EzYWYsIHRyYW5zcGFyZW50KTtcbiAgYW5pbWF0aW9uOiB3YWl0aW5nIDNzIGluZmluaXRlO1xufVxuLm9yZGVyLWNhcmQucHJvY2Vzc2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzNiODJmNjtcbn1cbi5vcmRlci1jYXJkLnByb2Nlc3Npbmc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICMzYjgyZjYsIHRyYW5zcGFyZW50KTtcbiAgYW5pbWF0aW9uOiBwcm9jZXNzaW5nIDEuNXMgaW5maW5pdGU7XG59XG4ub3JkZXItY2FyZC5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmVkO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMGI5ODE7XG59XG4ub3JkZXItY2FyZC5jb21wbGV0ZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLDosKcwpNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDZweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwYjk4MTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vcmRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLm9yZGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cblxuLm9yZGVyLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4ub3JkZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ub3JkZXItaGVhZGVyIC5vcmRlci1pZC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuLm9yZGVyLWhlYWRlciAub3JkZXItaWQtc2VjdGlvbiAub3JkZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMzYjgyZjY7XG59XG4ub3JkZXItaGVhZGVyIC5vcmRlci1pZC1zZWN0aW9uIC5vcmRlci1pZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG4ub3JkZXItaGVhZGVyIC5vcmRlci10YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vcmRlci1oZWFkZXIgLm9yZGVyLXRhZ3MgLm9yZGVyLXR5cGUtdGFnLFxuLm9yZGVyLWhlYWRlciAub3JkZXItdGFncyAub3JkZXItc3RhdHVzLXRhZyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG4ub3JkZXItaGVhZGVyIC5vcmRlci10YWdzIC5vcmRlci10eXBlLXRhZyBpLFxuLm9yZGVyLWhlYWRlciAub3JkZXItdGFncyAub3JkZXItc3RhdHVzLXRhZyBpIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ub3JkZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyLXRpbWUsXG4ub3JkZXItZGV0YWlscyAub3JkZXItYm90LFxuLm9yZGVyLWRldGFpbHMgLm9yZGVyLXdhaXRpbmcsXG4ub3JkZXItZGV0YWlscyAub3JkZXItc3VjY2VzcyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM2YjcyODA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyLXRpbWUgc3Bhbixcbi5vcmRlci1kZXRhaWxzIC5vcmRlci1ib3Qgc3Bhbixcbi5vcmRlci1kZXRhaWxzIC5vcmRlci13YWl0aW5nIHNwYW4sXG4ub3JkZXItZGV0YWlscyAub3JkZXItc3VjY2VzcyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlci1zdWNjZXNzIHtcbiAgY29sb3I6ICMxMGI5ODE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1oZWFkIHtcbiAgcGFkZGluZzogMTZweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjRmNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1oZWFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2FyZCAuYW50LWNhcmQtaGVhZCB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1oZWFkIC5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFmMjkzNztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1oZWFkIC5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJkIC5hbnQtY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNhcmQgLmFudC1jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0biB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1idG4gLmJ0bi10ZXh0IHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1idG4uYW50LWJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcbiAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xuICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLmFudC1idG4tcHJpbWFyeSAuYnRuLXRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLXByaW1hcnk6aG92ZXIgLmJ0bi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1idG4uYW50LWJ0bi1kYW5nZXJvdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLmFudC1idG4tZGFuZ2Vyb3VzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLWRhbmdlcm91czpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcbiAgY29sb3I6ICM5Y2EzYWYgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLWRhbmdlcm91cyAuYnRuLXRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLWRhbmdlcm91czpob3ZlciAuYnRuLXRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWJ0bi5hbnQtYnRuLWRhbmdlcm91czpkaXNhYmxlZCAuYnRuLXRleHQge1xuICBjb2xvcjogIzljYTNhZiAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFnIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuQGtleWZyYW1lcyBwcm9jZXNzaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3YWl0aW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn0iLCIvLyBTQ1NTIMOlwo/CmMOpwofCj8Olwq7CmsOkwrnCiVxyXG4kcHJpbWFyeS1jb2xvcjogIzNiODJmNjtcclxuJHByaW1hcnktaG92ZXI6ICMyNTYzZWI7XHJcbiRkYW5nZXItY29sb3I6ICNlZjQ0NDQ7XHJcbiRkYW5nZXItaG92ZXI6ICNkYzI2MjY7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMTBiOTgxO1xyXG4kd2FybmluZy1jb2xvcjogI2Y1OWUwYjtcclxuJHdhcm5pbmctaG92ZXI6ICNkOTc3MDY7XHJcblxyXG4kZ3JheS01MDogI2Y5ZmFmYjtcclxuJGdyYXktMTAwOiAjZjNmNGY2O1xyXG4kZ3JheS0yMDA6ICNlNWU3ZWI7XHJcbiRncmF5LTQwMDogIzljYTNhZjtcclxuJGdyYXktNTAwOiAjNmI3MjgwO1xyXG4kZ3JheS04MDA6ICMxZjI5Mzc7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1zbTogNnB4O1xyXG4kYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMTJweDtcclxuXHJcbiRzcGFjaW5nLXhzOiA0cHg7XHJcbiRzcGFjaW5nLXNtOiA2cHg7XHJcbiRzcGFjaW5nOiA4cHg7XHJcbiRzcGFjaW5nLW1kOiAxMnB4O1xyXG4kc3BhY2luZy1sZzogMTZweDtcclxuJHNwYWNpbmcteGw6IDIwcHg7XHJcbiRzcGFjaW5nLTJ4bDogMjRweDtcclxuXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07XHJcbiRmb250LXNpemUtc206IDAuODc1cmVtO1xyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtO1xyXG4kZm9udC1zaXplLTN4bDogMS44NzVyZW07XHJcbiRmb250LXNpemUtNHhsOiAyLjI1cmVtO1xyXG5cclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG5cclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI7XHJcbiRsaW5lLWhlaWdodC1ub3JtYWw6IDEuNTtcclxuXHJcbiRzaGFkb3ctc206IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZTtcclxuXHJcbi8vIE1peGluc1xyXG5AbWl4aW4gZmxleC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1peGluIGNhcmQtYmFzZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS0yMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tYmFzZSB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xyXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XHJcbiAgICBnYXA6ICRzcGFjaW5nLXNtO1xyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlLWZpcnN0IHtcclxuICAgIC8vIMOnwqfCu8OlworCqMOkwrzCmMOlwoXCiMOnwprChMOlwp/CusOnwqHCgMOmwqDCt8OlwrzCj1xyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0LXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZS1kZXNrdG9wLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gw6TCuMK7w6jCpsKBw6bCoMK3w6XCvMKPXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogJHNwYWNpbmctbGc7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQtdXAge1xyXG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhsO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGRlc2t0b3AtdXAge1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLTJ4bDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSGVhZGVyIFNlY3Rpb25cclxuLmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZy14bDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLTJ4bDtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC10aWdodDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0LXVwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLTN4bDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3AtdXAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtNHhsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXQtdXAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENvbnRyb2wgUGFuZWxcclxuLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmcteGw7XHJcbn1cclxuXHJcbi5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGRlc2t0b3AtdXAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRyb2wtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcclxuICAgIGdhcDogJHNwYWNpbmctc207XHJcbiAgICBwYWRkaW5nOiAwICRzcGFjaW5nLXNtO1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICBnYXA6ICRzcGFjaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGRlc2t0b3AtdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgJHNwYWNpbmctbGc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXQtdXAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wLXVwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYudmlwLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcclxuICAgICAgICBib3JkZXItY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjOTI0MDBlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTY4YTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2FybmluZy1ob3ZlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM5MjQwMGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzkyNDAwZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciAuYnRuLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzkyNDAwZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQm90IFN0YXR1cyBTZWN0aW9uXHJcbi5ib3QtbWFuYWdlbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZy14bDtcclxuXHJcbiAgICAuYm90LXRpdGxlLXNlY3Rpb24ge1xyXG4gICAgICAgIC5ib3QtdGl0bGUtbWFpbiB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGdhcDogJHNwYWNpbmctc207XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXhzO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTgwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdW50LWJhZGdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4ICRzcGFjaW5nLXNtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdC1zdW1tYXJ5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy1sZztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNpbmcteHM7XHJcblxyXG4gICAgICAgICAgICAuc3VtbWFyeS1pdGVtIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYW5nZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gICAgY29sb3I6ICRncmF5LTQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhsO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5lbXB0eS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtMnhsO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS00MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXhzO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm90cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogJHNwYWNpbmctbGc7XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0LXVwIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGdhcDogJHNwYWNpbmctbGc7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZGVza3RvcC11cCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICBnYXA6ICRzcGFjaW5nLXhsO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGxhcmdlLWRlc2t0b3AtdXAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3QtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2luZy1sZztcclxuICAgIEBpbmNsdWRlIGNhcmQtYmFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgQGluY2x1ZGUgZGVza3RvcC11cCB7XHJcbiAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdHVzLWJhc2VkIHN0eWxpbmdcclxuICAgICYuYm90LWlkbGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJHN1Y2Nlc3MtY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmZlZDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJvdC1wcm9jZXNzaW5nIHtcclxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAkcHJpbWFyeS1jb2xvciwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHByb2Nlc3NpbmcgMnMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3QtaGVhZGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmc7XHJcblxyXG4gICAgICAgIC5ib3QtaW5mbyB7XHJcbiAgICAgICAgICAgIC5ib3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogJHNwYWNpbmcteHM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3QtaWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90LXN0YXR1cy10YWcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6ICRzcGFjaW5nLXhzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm90LWJvZHkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nO1xyXG5cclxuICAgICAgICAuYm90LWN1cnJlbnQtb3JkZXIsXHJcbiAgICAgICAgLmJvdC1yZWFkeSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGdhcDogJHNwYWNpbmcteHM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteHMgJHNwYWNpbmctc207XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkc3BhY2luZy14cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3QtY3VycmVudC1vcmRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnktY29sb3IsIDAuMSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3QtcmVhZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzdWNjZXNzLWNvbG9yLCAwLjEpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBPcmRlcnMgU2VjdGlvblxyXG4ub3JkZXJzLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6ICRzcGFjaW5nLXhsO1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBnYXA6ICRzcGFjaW5nLTJ4bDtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXJzLWNhcmQge1xyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDsgLy8gw6nCmMKyw6bCrcKiIGZsZXggw6XCrcKQw6nCocK5w6bClMK2w6fCvMKpw6nCl8Kuw6nCosKYXHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtICN7JHNwYWNpbmcteGx9KTsgLy8gw6XCm8K6w6XCrsKaw6XCrsK9w6XCusKmw6/CvMKMw6nCgcK/w6XChcKNw6bCu8Kaw6XCisKow6bCncKhw6XCvcKxw6XCk8KNXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXJzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8vIMOmwpTCucOkwrjCuiBibG9jayDDqcKBwr/DpcKFwo0gZmxleCDDpcKvwrzDqMKHwrTDp8KawoTDpcK4woPDpcKxwoDDpcKPwpjDpcKMwpZcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogb3ZlcmxheTsgLy8gw6TCvcK/w6fClMKoIG92ZXJsYXkgw6nCgcK/w6XChcKNw6XCuMKDw6XCscKAw6XCj8KYw6XCjMKWXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8vIEZpcmVmb3ggw6bClMKvw6bCjMKBXHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0LXVwIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBkZXNrdG9wLXVwIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDDpMK4wrrDpsK7wprDpcKKwqjDpsKdwqHDpsK3wrvDpcKKwqDDp8K+wo7DpcKMwpbDpsKgwrfDpcK8wo9cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlci1jYXJkIHtcclxuICAgIHBhZGRpbmc6ICRzcGFjaW5nLWxnO1xyXG4gICAgQGluY2x1ZGUgY2FyZC1iYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmctbGc7IC8vIMOmwrfCu8OlworCoMOlwrrClcOpwoPCqMOpwpfCtMOowrfCncOmwpvCv8OkwrvCoyBmbGV4IGdhcFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBAaW5jbHVkZSBkZXNrdG9wLXVwIHtcclxuICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14bDtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IC8vIMOmwpzCgMOlwpDCjsOkwrjCgMOkwrjCqsOlwo3CocOnwonCh8OkwrjCjcOpwpzCgMOowqbCgcOlwrrClcOpwoPCqMOpwpfCtMOowrfCnVxyXG4gICAgfVxyXG5cclxuICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRncmF5LTQwMDtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICRncmF5LTQwMCwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHdhaXRpbmcgM3MgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucHJvY2Vzc2luZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcclxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgJHByaW1hcnktY29sb3IsIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9jZXNzaW5nIDEuNXMgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmVkO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJHN1Y2Nlc3MtY29sb3I7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ8OiwpzCkyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAkc3BhY2luZy1zbTtcclxuICAgICAgICAgICAgcmlnaHQ6ICRzcGFjaW5nLXNtO1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogJHNwYWNpbmc7XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0LXVwIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXItaW5mbyB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4ub3JkZXItaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAkc3BhY2luZy1zbTtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXNtO1xyXG5cclxuICAgIC5vcmRlci1pZC1zZWN0aW9uIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcclxuICAgICAgICBnYXA6ICRzcGFjaW5nLXNtO1xyXG5cclxuICAgICAgICAub3JkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3JkZXItaWQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LTgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLXRhZ3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIC5vcmRlci10eXBlLXRhZyxcclxuICAgICAgICAub3JkZXItc3RhdHVzLXRhZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogJHNwYWNpbmcteHM7XHJcblxyXG4gICAgLm9yZGVyLXRpbWUsXHJcbiAgICAub3JkZXItYm90LFxyXG4gICAgLm9yZGVyLXdhaXRpbmcsXHJcbiAgICAub3JkZXItc3VjY2VzcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS01MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6ICRzcGFjaW5nLXhzO1xyXG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzIDA7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQW50IERlc2lnbiBvdmVycmlkZXNcclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5hbnQtY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZy14bDtcclxuXHJcbiAgICAgICAgLmFudC1jYXJkLWhlYWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1sZyAkc3BhY2luZy1sZztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5LTEwMDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1sZyAkc3BhY2luZy14bDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcC11cCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14bCAkc3BhY2luZy14bDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFudC1jYXJkLWhlYWQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTgwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQtdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1sZztcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldC11cCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14bDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcC11cCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14bDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW50LWJ0biB7XHJcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLWJhc2U7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XHJcblxyXG4gICAgICAgIC5idG4tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hbnQtYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWhvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1ob3ZlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIgLmJ0bi10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFudC1idG4tZGFuZ2Vyb3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlci1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGFuZ2VyLWNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlci1ob3ZlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGRhbmdlci1ob3ZlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTIwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTQwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIgLmJ0bi10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmRpc2FibGVkIC5idG4tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC10YWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMnB4ICRzcGFjaW5nO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuQGtleWZyYW1lcyBwcm9jZXNzaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2FpdGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8674:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


/**
 * 订单管理服务
 *
 * 该服务负责管理麦当劳订单系统的核心业务逻辑，包括：
 * - 订单的创建、更新和状态管理
 * - 烹饪机器人的管理和分配
 * - 自动化订单处理流程
 * - VIP 订单优先级处理
 *
 * 使用 RxJS BehaviorSubject 实现响应式数据流，
 * 确保 UI 组件能够实时响应数据变化。
 */
class OrderService {
  constructor() {
    /** 订单数据流 - 存储所有订单的状态 */
    this.orders$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    /** 机器人数据流 - 存储所有机器人的状态 */
    this.bots$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    /** 下一个订单ID计数器 */
    this.nextOrderId = 1;
    /** 下一个机器人ID计数器 */
    this.nextBotId = 1;
    /** 存储订单处理的定时器，用于在需要时取消 */
    this.orderTimers = new Map();
    // 启动订单处理循环
    this.startProcessingLoop();
  }
  /**
   * 获取订单数据流
   * @returns Observable<Order[]> 订单数组的观察者对象
   */
  getOrders() {
    return this.orders$.asObservable();
  }
  /**
   * 获取机器人数据流
   * @returns Observable<Bot[]> 机器人数组的观察者对象
   */
  getBots() {
    return this.bots$.asObservable();
  }
  /**
   * 创建普通订单
   * 普通订单会被添加到队列末尾
   */
  createNormalOrder() {
    const currentOrders = this.orders$.value;
    const newOrder = {
      id: this.nextOrderId,
      type: 'NORMAL',
      status: 'PENDING',
      createdAt: new Date()
    };
    this.orders$.next([...currentOrders, newOrder]);
    this.nextOrderId++;
  }
  /**
   * 创建 VIP 订单
   * VIP 订单具有优先权，会被插入到现有 VIP 订单之后，普通订单之前
   */
  createVipOrder() {
    const currentOrders = this.orders$.value;
    const newOrder = {
      id: this.nextOrderId,
      type: 'VIP',
      status: 'PENDING',
      createdAt: new Date()
    };
    const pendingOrders = currentOrders.filter(order => order.status === 'PENDING');
    const nonPendingOrders = currentOrders.filter(order => order.status !== 'PENDING');
    // 找到插入位置：在现有 VIP 订单之后，普通订单之前
    let insertIndex = 0;
    for (let i = pendingOrders.length - 1; i >= 0; i--) {
      if (pendingOrders[i].type === 'VIP') {
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
   * 添加新的烹饪机器人
   * 新机器人默认状态为空闲，可以立即接受订单
   */
  addBot() {
    const currentBots = this.bots$.value;
    const newBot = {
      id: this.nextBotId,
      status: 'IDLE'
    };
    this.bots$.next([...currentBots, newBot]);
    this.nextBotId++;
  }
  /**
   * 移除最新添加的机器人
   * 如果机器人正在处理订单，该订单会被返回到待处理队列，并取消处理定时器
   */
  removeBot() {
    const currentBots = this.bots$.value;
    if (currentBots.length === 0) return;
    const newestBot = currentBots[currentBots.length - 1];
    // 如果机器人正在处理订单，将订单返回到待处理状态并取消定时器
    if (newestBot.status === 'PROCESSING' && newestBot.currentOrderId) {
      const orderId = newestBot.currentOrderId;
      // 取消该订单的处理定时器
      const timerId = this.orderTimers.get(orderId);
      if (timerId) {
        clearTimeout(timerId);
        this.orderTimers.delete(orderId);
      }
      const currentOrders = this.orders$.value;
      const updatedOrders = currentOrders.map(order => order.id === orderId ? {
        ...order,
        status: 'PENDING',
        processingBotId: undefined
      } : order);
      this.orders$.next(updatedOrders);
    }
    this.bots$.next(currentBots.slice(0, -1));
  } /**
    * 获取待处理订单列表
    * @returns Order[] 状态为 PENDING 的订单数组
    */
  getPendingOrders() {
    return this.orders$.value.filter(order => order.status === 'PENDING');
  }
  /**
   * 获取正在处理的订单列表
   * @returns Order[] 状态为 PROCESSING 的订单数组
   */
  getProcessingOrders() {
    return this.orders$.value.filter(order => order.status === 'PROCESSING');
  }
  /**
   * 获取已完成订单列表
   * @returns Order[] 状态为 COMPLETE 的订单数组
   */
  getCompletedOrders() {
    return this.orders$.value.filter(order => order.status === 'COMPLETE');
  }
  /**
   * 启动订单处理循环
   * 每100毫秒检查一次是否有空闲机器人和待处理订单可以匹配
   * @private
   */
  startProcessingLoop() {
    this.processingInterval = window.setInterval(() => {
      this.processOrders();
    }, 100);
  }
  /**
   * 处理订单分配逻辑
   * 将空闲的机器人分配给待处理的订单，并在10秒后完成订单
   * @private
   */
  processOrders() {
    const currentBots = this.bots$.value;
    const currentOrders = this.orders$.value;
    const idleBots = currentBots.filter(bot => bot.status === 'IDLE');
    const pendingOrders = currentOrders.filter(order => order.status === 'PENDING');
    // 为每个空闲机器人分配待处理订单
    idleBots.forEach((bot, index) => {
      if (index < pendingOrders.length) {
        const orderToProcess = pendingOrders[index];
        // 更新机器人状态为处理中
        const updatedBots = currentBots.map(b => b.id === bot.id ? {
          ...b,
          status: 'PROCESSING',
          currentOrderId: orderToProcess.id,
          processingStartTime: new Date()
        } : b);
        this.bots$.next(updatedBots);
        // 更新订单状态为处理中
        const updatedOrders = currentOrders.map(order => order.id === orderToProcess.id ? {
          ...order,
          status: 'PROCESSING',
          processingBotId: bot.id
        } : order);
        this.orders$.next(updatedOrders);
        // 10秒后完成订单处理
        const timerId = setTimeout(() => {
          // 检查订单是否仍在处理中（可能已被取消）
          const currentOrdersAtCompletion = this.orders$.value;
          const currentBotsAtCompletion = this.bots$.value;
          const orderStillProcessing = currentOrdersAtCompletion.find(order => order.id === orderToProcess.id && order.status === 'PROCESSING');
          const botStillExists = currentBotsAtCompletion.find(b => b.id === bot.id);
          // 只有当订单仍在处理中且机器人仍存在时才完成订单
          if (orderStillProcessing && botStillExists) {
            // 将机器人状态重置为空闲
            const finalBots = this.bots$.value.map(b => b.id === bot.id ? {
              ...b,
              status: 'IDLE',
              currentOrderId: undefined,
              processingStartTime: undefined
            } : b);
            this.bots$.next(finalBots);
            // 将订单状态更新为已完成
            const finalOrders = this.orders$.value.map(order => order.id === orderToProcess.id ? {
              ...order,
              status: 'COMPLETE'
            } : order);
            this.orders$.next(finalOrders);
          }
          // 清理定时器引用
          this.orderTimers.delete(orderToProcess.id);
        }, 10000); // 10秒处理时间
        // 存储定时器引用，以便可以取消
        this.orderTimers.set(orderToProcess.id, timerId);
      }
    });
  }
  /**
   * 清理资源
   * 组件销毁时调用，清除定时器防止内存泄漏
   */
  ngOnDestroy() {
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
    }
    // 清理所有订单处理定时器
    this.orderTimers.forEach(timerId => {
      clearTimeout(timerId);
    });
    this.orderTimers.clear();
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map