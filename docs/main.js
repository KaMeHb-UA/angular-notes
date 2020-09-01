(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _etc_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/lang */ "./src/app/etc/lang.js");
/* harmony import */ var _components_note_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/note-list/component */ "./src/app/components/note-list/component.ts");
/* harmony import */ var _components_add_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-button/component */ "./src/app/components/add-button/component.ts");
/* harmony import */ var _components_sync_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sync-button/component */ "./src/app/components/sync-button/component.ts");






class AppComponent {
    constructor() {
        this.title = 'test-angular-app';
        this.lang = _etc_lang__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "round", "btn", "shadow-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "note-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "add-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sync-button");
    } }, directives: [_components_note_list_component__WEBPACK_IMPORTED_MODULE_2__["default"], _components_add_button_component__WEBPACK_IMPORTED_MODULE_3__["default"], _components_sync_button_component__WEBPACK_IMPORTED_MODULE_4__["default"]], styles: ["add-button[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFkZC1idXR0b257XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/note-list/component */ "./src/app/components/note-list/component.ts");
/* harmony import */ var _components_note_single_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/note-single/component */ "./src/app/components/note-single/component.ts");
/* harmony import */ var _components_add_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-button/component */ "./src/app/components/add-button/component.ts");
/* harmony import */ var _components_sync_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sync-button/component */ "./src/app/components/sync-button/component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _components_note_single_component__WEBPACK_IMPORTED_MODULE_5__["default"],
        _components_add_button_component__WEBPACK_IMPORTED_MODULE_6__["default"],
        _components_sync_button_component__WEBPACK_IMPORTED_MODULE_7__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"],
                    _components_note_single_component__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _components_add_button_component__WEBPACK_IMPORTED_MODULE_6__["default"],
                    _components_sync_button_component__WEBPACK_IMPORTED_MODULE_7__["default"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-button/component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/add-button/component.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db/index.js");




class AddButton {
    onClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const count = (yield _controllers_db__WEBPACK_IMPORTED_MODULE_2__["get"]('general', 'noteCount')) || 0;
            _controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"]('general', 'noteCount', count + 1);
        });
    }
}
AddButton.ɵfac = function AddButton_Factory(t) { return new (t || AddButton)(); };
AddButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddButton, selectors: [["add-button"]], decls: 3, vars: 0, consts: [[3, "click"], ["aria-hidden", "true", 1, "material-icons", "mdc-fab__icon"]], template: function AddButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddButton_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  background-color: #0075ff;\n  color: #fff;\n}\ndiv[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYnV0dG9uL2NvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtYnV0dG9uL2NvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc1ZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgPiBpe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'add-button',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/note-list/component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/note-list/component.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _etc_setImmediate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../etc/setImmediate */ "./src/app/etc/setImmediate.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-button/component */ "./src/app/components/add-button/component.ts");
/* harmony import */ var _note_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../note-single/component */ "./src/app/components/note-single/component.ts");








function NoteList_note_single_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "note-single", 1);
} if (rf & 2) {
    const noteId_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-id", noteId_r2);
} }
class NoteList {
    constructor(ngZone) {
        this.notes = Object(_controllers_db__WEBPACK_IMPORTED_MODULE_1__["default"])('general', 'noteCount').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => new Array(v || 0)));
        this.notes.subscribe(() => {
            Object(_etc_setImmediate__WEBPACK_IMPORTED_MODULE_3__["default"])(() => ngZone.run(() => void 0));
        });
    }
}
NoteList.ɵfac = function NoteList_Factory(t) { return new (t || NoteList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
NoteList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteList, selectors: [["note-list"]], decls: 3, vars: 3, consts: [["class", "shadow-1 blk-material", 4, "ngFor", "ngForOf"], [1, "shadow-1", "blk-material"]], template: function NoteList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoteList_note_single_0_Template, 1, 1, "note-single", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "add-button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.notes));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _add_button_component__WEBPACK_IMPORTED_MODULE_5__["default"], _note_single_component__WEBPACK_IMPORTED_MODULE_6__["default"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["note-list {\n  --padding: 54px;\n  --padding-bottom: 52px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: var(--padding);\n  padding: var(--padding);\n}\nnote-list.has-active {\n  grid-template: auto/minmax(200px, 600px);\n  justify-content: center;\n}\nnote-list.has-active > *:not(.active) {\n  display: none;\n}\nnote-list > add-button {\n  min-height: calc(var(--height) + var(--padding) /* blk-material */ + var(--padding-bottom) /* any note-list child */);\n}\nnote-list > add-button > div > i {\n  font-size: 48px !important;\n}\nnote-list > * {\n  --height: 80px;\n  min-height: var(--height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RlLWxpc3QvY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBR0k7RUFDSSxxSEFBQTtBQURSO0FBRVE7RUFDSSwwQkFBQTtBQUFaO0FBSUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS1saXN0L2NvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibm90ZS1saXN0e1xuICAgIC0tcGFkZGluZzogNTRweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1MnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1wYWRkaW5nKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcblxuICAgICYuaGFzLWFjdGl2ZXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIG1pbm1heCgyMDBweCwgNjAwcHgpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICA+ICo6bm90KC5hY3RpdmUpe1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gYWRkLWJ1dHRvbntcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpICsgdmFyKC0tcGFkZGluZykgLyogYmxrLW1hdGVyaWFsICovICsgdmFyKC0tcGFkZGluZy1ib3R0b20pIC8qIGFueSBub3RlLWxpc3QgY2hpbGQgKi8pO1xuICAgICAgICA+IGRpdiA+IGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gKiB7XG4gICAgICAgIC0taGVpZ2h0OiA4MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'note-list',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/note-single/component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/note-single/component.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteSingle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NoteSingle_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NoteSingle_div_3_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.setDone(i_r4, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NoteSingle_div_3_div_5_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.setText(i_r4, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("checked", todo_r3.done ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r2.text_here)("value", todo_r3.text);
} }
function NoteSingle_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NoteSingle_div_3_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setName($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NoteSingle_div_3_div_5_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteSingle_div_3_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](note_r1.name ? null : "unnamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](note_r1.name ? note_r1.name : ctx_r0.unnamed_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r0.unnamed_text)("value", note_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", note_r1.data);
} }
function getNoteList(element) {
    return element.nodeName === 'NOTE-LIST' ? element : getNoteList(element.parentElement);
}
function removeEmpty(arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
        if (arr[i - 1] && arr[i - 1].text)
            return arr;
        arr.length--;
        delete arr[i];
    }
}
class NoteSingle {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.unnamed_text = 'Unnamed note';
        this.text_here = 'Text here';
        this.active = false;
    }
    ngOnInit() {
        const id = this.element.nativeElement.getAttribute('data-id');
        this.id = id;
        this.data = Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["default"])('notes', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => {
            v = v || { name: '', data: [] };
            this.note = v;
            return v;
        }));
        this.renderer.listen(this.element.nativeElement, 'click', () => {
            if (this.active)
                return;
            this.active = true;
            this.renderer.addClass(this.element.nativeElement, 'active');
            this.renderer.addClass(getNoteList(this.element.nativeElement), 'has-active');
        });
    }
    remove(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.stopPropagation();
            document.activeElement.blur();
            const noteCount = yield Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["get"])('general', 'noteCount');
            Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"])('general', 'noteCount', noteCount - 1);
            for (let id = +this.id + 1; id < noteCount; id++)
                Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["get"])('notes', `${id}`).then((v) => Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"])('notes', `${id - 1}`, v));
            Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["remove"])('notes', `${noteCount - 1}`);
        });
    }
    setText(i, { value }) {
        this.note.data[i].text = value;
        Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"])('notes', this.id, this.note, true);
    }
    setDone(i, { checked }) {
        this.note.data[i].done = checked;
        Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"])('notes', this.id, this.note, true);
    }
    setName({ value }) {
        this.note.name = value;
        Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["set"])('notes', this.id, this.note, true);
    }
    sort(note) {
        if (!note)
            return note;
        note.data = note.data.filter(a => !a.done).concat(note.data.filter(a => a.done)).filter(v => v.text).slice(0, 3);
        return note;
    }
    full(note) {
        if (!note)
            return note;
        removeEmpty(note.data);
        if (!note.data.length || note.data[note.data.length - 1].text)
            note.data.push({
                done: false,
                text: '',
            });
        return note;
    }
    clickCancel(e) {
        e.stopPropagation();
        this.active = false;
        this.renderer.removeClass(this.element.nativeElement, 'active');
        this.renderer.removeClass(getNoteList(this.element.nativeElement), 'has-active');
        Object(_controllers_db__WEBPACK_IMPORTED_MODULE_2__["runPendingEvents"])();
    }
}
NoteSingle.ɵfac = function NoteSingle_Factory(t) { return new (t || NoteSingle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NoteSingle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteSingle, selectors: [["note-single"]], decls: 5, vars: 3, consts: [[1, "round", "cancel", "shadow-1", 3, "click"], [1, "material-icons"], [4, "ngIf"], [3, "placeholder", "value", "keyup"], [4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], ["type", "checkbox", 3, "change"]], template: function NoteSingle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteSingle_Template_button_click_0_listener($event) { return ctx.clickCancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteSingle_div_3_Template, 9, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.active ? ctx.full : ctx.sort)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx.data)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["note-single {\n  cursor: pointer;\n  padding-bottom: var(--padding-bottom) !important;\n}\nnote-single h6 {\n  margin: 0;\n  text-align: center;\n}\nnote-single h6.unnamed {\n  color: #888;\n}\nnote-single h6, note-single h6 + input {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  line-height: 1.2;\n  border: 0;\n  width: 100%;\n  padding: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nnote-single > div > div > div {\n  display: flex;\n}\nnote-single input:checked + input {\n  text-decoration: line-through;\n  color: #888;\n}\nnote-single input[type=checkbox] + input {\n  border: 0;\n  border-bottom: 1px solid transparent;\n  flex-grow: 1;\n  text-overflow: ellipsis;\n}\nnote-single input[type=checkbox] + input:focus {\n  border-bottom-color: #888;\n}\nnote-single:not(.active) button.cancel {\n  display: none;\n}\nnote-single:not(.active) input {\n  pointer-events: none;\n}\nnote-single:not(.active) h6 + input {\n  display: none;\n}\nnote-single.active {\n  cursor: unset;\n}\nnote-single.active button.delete,\nnote-single.active h6 {\n  display: none;\n}\nnote-single button.cancel {\n  position: absolute;\n  top: 0;\n  left: -18px;\n}\nnote-single button.delete {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\nnote-single button.delete:hover, note-single button.delete:focus {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RlLXNpbmdsZS9jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnREFBQTtBQUNKO0FBQ0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksV0FBQTtBQUNaO0FBRVE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBT0k7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFMUjtBQVFJO0VBQ0ksU0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBTlI7QUFRUTtFQUNJLHlCQUFBO0FBTlo7QUFXUTtFQUNJLGFBQUE7QUFUWjtBQVlRO0VBQ0ksb0JBQUE7QUFWWjtBQWFRO0VBQ0ksYUFBQTtBQVhaO0FBZUk7RUFDSSxhQUFBO0FBYlI7QUFlUTs7RUFFSSxhQUFBO0FBYlo7QUFpQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBZlI7QUFrQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJSO0FBa0JRO0VBRUksVUFBQTtBQWpCWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS1zaW5nbGUvY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJub3RlLXNpbmdsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKSAhaW1wb3J0YW50O1xuXG4gICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmLnVubmFtZWR7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgfVxuXG4gICAgICAgICYsICsgaW5wdXR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgPiBkaXYgPiBkaXZ7XG4gICAgICAgID4gZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0OmNoZWNrZWQgKyBpbnB1dHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgaW5wdXR7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSl7XG4gICAgICAgIGJ1dHRvbi5jYW5jZWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2ICsgaW5wdXR7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmV7XG4gICAgICAgIGN1cnNvcjogdW5zZXQ7XG4gICAgICAgIFxuICAgICAgICBidXR0b24uZGVsZXRlLFxuICAgICAgICBoNntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24uY2FuY2Vse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTE4cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLmRlbGV0ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoteSingle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'note-single',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sync-button/component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/sync-button/component.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SyncButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/firebase/firestore */ "./src/app/controllers/firebase/firestore.js");



class SyncButton {
    constructor(ngZone, eRef) {
        this.eRef = eRef;
        this.sync_active = false;
        this.display_name = '';
        _controllers_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(next => {
            ngZone.run(() => {
                if (next) {
                    this.sync_active = true;
                    this.display_name = next.displayName || next.email || '';
                }
                else {
                    this.sync_active = false;
                    this.display_name = '';
                }
            });
        });
    }
    signOut() {
        _controllers_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut();
        this.eRef.nativeElement.querySelector('label').click();
    }
}
SyncButton.ɵfac = function SyncButton_Factory(t) { return new (t || SyncButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SyncButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SyncButton, selectors: [["sync-button"]], decls: 21, vars: 4, consts: [[1, "name"], ["for", "sync-auth-chb"], ["aria-hidden", "true", 1, "material-icons", "mdc-fab__icon"], ["type", "checkbox", "id", "sync-auth-chb"], ["id", "firebaseui-auth-container"], [1, "sign-out"], [1, "firebaseui-container"], [1, "mdl-button", "mdl-button--raised", "firebaseui-idp-button", 3, "click"], [1, "firebaseui-idp-icon-wrapper"], [1, "firebaseui-idp-text", "firebaseui-idp-text-long"]], template: function SyncButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncButton_Template_button_click_15_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sync_active ? "active" : "");
    } }, styles: ["input[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  display: none;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 20px;\n  right: 20px;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  color: #0075ff;\n}\n\nlabel[_ngcontent-%COMP%]:not(.active)    + input[_ngcontent-%COMP%]:checked    + #firebaseui-auth-container[_ngcontent-%COMP%], label.active[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%]:checked    ~ .sign-out[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #f7f9fc;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\nlabel[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 38px;\n  cursor: pointer;\n}\n\n.name[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 28px;\n  right: 66px;\n}\n\n.sign-out[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  background: transparent;\n}\n\n.sign-out[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  text-align: center;\n  background: black;\n  color: #fff;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zeW5jLWJ1dHRvbi9jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFFSTtFQUVJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQURSOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFGUjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU9JO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBSlI7O0FBTUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3luYy1idXR0b24vY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCwgZGl2e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmxhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcblxuICAgICYuYWN0aXZle1xuICAgICAgICBjb2xvcjogIzAwNzVmZjtcbiAgICB9XG5cbiAgICAmOm5vdCguYWN0aXZlKSArIGlucHV0OmNoZWNrZWQgKyAjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcixcbiAgICAmLmFjdGl2ZSArIGlucHV0OmNoZWNrZWQgfiAuc2lnbi1vdXR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmOWZjO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICA+IGl7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLm5hbWV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjhweDtcbiAgICByaWdodDogNjZweDtcbn1cblxuLnNpZ24tb3V0e1xuICAgIGRpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SyncButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sync-button',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/db/index.js":
/*!*****************************************!*\
  !*** ./src/app/controllers/db/index.js ***!
  \*****************************************/
/*! exports provided: default, get, set, remove, runPendingEvents, listTables, listNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runPendingEvents", function() { return runPendingEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTables", function() { return listTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listNames", function() { return listNames; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _providers_indexedDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/indexedDB */ "./src/app/controllers/db/providers/indexedDB.js");



/* harmony default export */ __webpack_exports__["default"] = (function(table, name){
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
        _providers_indexedDB__WEBPACK_IMPORTED_MODULE_1__["get"](table, name).then(v => observer.next(v));
        const handler = v => observer.next(v);
        _providers_indexedDB__WEBPACK_IMPORTED_MODULE_1__["onChange"](table, name, handler);
        return () => _providers_indexedDB__WEBPACK_IMPORTED_MODULE_1__["offChange"](table, name, handler)
    })
});

const { get, set, remove, runPendingEvents, listTables, listNames } = _providers_indexedDB__WEBPACK_IMPORTED_MODULE_1__


/***/ }),

/***/ "./src/app/controllers/db/providers/indexedDB.js":
/*!*******************************************************!*\
  !*** ./src/app/controllers/db/providers/indexedDB.js ***!
  \*******************************************************/
/*! exports provided: get, set, remove, onChange, offChange, clearCache, runPendingEvents, listTables, listNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChange", function() { return onChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offChange", function() { return offChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runPendingEvents", function() { return runPendingEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTables", function() { return listTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listNames", function() { return listNames; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etc_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../etc/flat */ "./src/app/etc/flat.js");



const ee = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
const pendingEvents = Object.create(null);
const cache = Object.create(null);
const tables = [];

initDB(0, v => tables.push(v));

/** @type {typeof import('./indexedDB.internal').request} */
const request = (obj, name, ...args) => {
    let req;
    const res = new Promise((resolve, reject) => {
        const request = obj[name](...args);
        req = request;
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result)
    });
    res.request = req;
    return res
}

function initDB(version, createObjectStore){
    switch(version){
        case 0:
        case 1:
            createObjectStore('general');
            createObjectStore('notes');
    }
}

async function openDB(){
    const dbr = request(indexedDB, 'open', 'data', 1);
    dbr.request.onupgradeneeded = () => {
        const db = dbr.request.result;
        console.log('Upgradeneeded:', db.version, db);
        initDB(db.version, v => db.createObjectStore(v))
    }
    return dbr
}

async function get(storeName, name){
    if(!(name in cache)){
        const db = await openDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        cache[name] = await request(store, 'get', name)
    }
    return cache[name] === undefined ? undefined : JSON.parse(JSON.stringify(cache[name]))
}

async function set(storeName, name, value, silent){
    const db = await openDB();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await request(store, 'put', value, name);
    cache[name] = value;
    if(silent) pendingEvents[name] = [value, 'update'];
    else ee.emit(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_1__["default"])(storeName, name), value, 'update')
}

async function remove(storeName, name, silent){
    const db = await openDB();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await request(store, 'delete', name);
    delete cache[name];
    if(silent) pendingEvents[name] = [void 0, 'remove'];
    else ee.emit(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_1__["default"])(storeName, name), void 0, 'remove')
}

function onChange(table, name, callback){
    ee.on(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_1__["default"])(table, name), callback)
}

function offChange(table, name, callback){
    ee.off(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_1__["default"])(table, name), callback)
}

function clearCache(){
    for(const i in cache) delete cache[i]
}

function runPendingEvents(){
    for(const name in pendingEvents){
        const args = pendingEvents[name];
        delete pendingEvents[name];
        ee.emit(name, ...args)
    }
}

async function listTables(){
    return [...tables]
}

async function listNames(table){
    const db = await openDB();
    const tx = db.transaction(table, 'readonly');
    const store = tx.objectStore(table);
    const keys = await request(store, 'getAllKeys');
    return [...keys]
}


/***/ }),

/***/ "./src/app/controllers/firebase/config.js":
/*!************************************************!*\
  !*** ./src/app/controllers/firebase/config.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    apiKey: "AIzaSyBphpKblDDgvF7Waad5g77O0gqdmDVkeiI",
    authDomain: "angular-test-notes-j87g65.firebaseapp.com",
    databaseURL: "https://angular-test-notes-j87g65.firebaseio.com",
    projectId: "angular-test-notes-j87g65",
    storageBucket: "angular-test-notes-j87g65.appspot.com",
    messagingSenderId: "277728976218",
    appId: "1:277728976218:web:dae8ff7e6b81d5052d6763",
    measurementId: "G-LX8TCCKBFM"
});


/***/ }),

/***/ "./src/app/controllers/firebase/firestore.js":
/*!***************************************************!*\
  !*** ./src/app/controllers/firebase/firestore.js ***!
  \***************************************************/
/*! exports provided: default, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/app/controllers/firebase/config.js");


/** @type {{ firebase: typeof import('firebase') }} */
const { firebase } = Function('return this')();
const app = firebase.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__["default"]);
try{
    // may be blocked by ab blockers
    firebase.analytics(app)
} catch(e){}

/* harmony default export */ __webpack_exports__["default"] = (firebase.firestore(app));

const auth = firebase.auth(app)


/***/ }),

/***/ "./src/app/controllers/firebase/syncd.js":
/*!***********************************************!*\
  !*** ./src/app/controllers/firebase/syncd.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _etc_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etc/flat */ "./src/app/etc/flat.js");
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore */ "./src/app/controllers/firebase/firestore.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ "./src/app/controllers/db/index.js");
/* harmony import */ var _etc_setIntervalImmediate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../etc/setIntervalImmediate */ "./src/app/etc/setIntervalImmediate.js");
/* harmony import */ var _etc_resolveablePromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etc/resolveablePromise */ "./src/app/etc/resolveablePromise.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./src/app/controllers/firebase/ui.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui__WEBPACK_IMPORTED_MODULE_5__);







let uid;

function set(table, name, value){
    return _firestore__WEBPACK_IMPORTED_MODULE_1__["default"].collection(uid).doc(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_0__["default"])(table, name)).set(JSON.parse(JSON.stringify({value})))
}

function remove(table, name){
    return _firestore__WEBPACK_IMPORTED_MODULE_1__["default"].collection(uid).doc(Object(_etc_flat__WEBPACK_IMPORTED_MODULE_0__["default"])(table, name)).delete()
}

async function populateLocalDB(){
    const tables = await _db__WEBPACK_IMPORTED_MODULE_2__["listTables"]();
    const names = await Promise.all(tables.map(table => _db__WEBPACK_IMPORTED_MODULE_2__["listNames"](table).then(names => names.map(name => [ table, name ]))));
    const values = await Promise.all(names.shift().concat(...names).map(([ table, name ]) => _db__WEBPACK_IMPORTED_MODULE_2__["get"](table, name).then(v => [ table, name, v ])));
    const db = {};
    for(const [ table, name, value ] of values) db[Object(_etc_flat__WEBPACK_IMPORTED_MODULE_0__["default"])(table, name)] = value;
    return db
}

function arrayChanges(base, next){
    const deleted = base.filter(v => !next.includes(v));
    return {
        deleted,
        added: next.filter(v => !base.includes(v)),
        flat: base.filter(v => !deleted.includes(v)),
    }
}

const lastLocalSnapshot = {};
const firstLocalSnapshot = new _etc_resolveablePromise__WEBPACK_IMPORTED_MODULE_4__["default"];

function onLocalSnapshot(snapshot){
    const { deleted, added, flat } = arrayChanges(Object.keys(lastLocalSnapshot), Object.keys(snapshot));
    for(const tablename of deleted){
        const [ table, name ] = JSON.parse(tablename);
        delete lastLocalSnapshot[tablename];
        remove(table, name)
    }
    for(const tablename of added){
        const [ table, name ] = JSON.parse(tablename);
        lastLocalSnapshot[tablename] = snapshot[tablename];
        set(table, name, snapshot[tablename])
    }
    for(const tablename of flat){
        if(JSON.stringify(lastLocalSnapshot[tablename]) !== JSON.stringify(snapshot[tablename])){
            const [ table, name ] = JSON.parse(tablename);
            lastLocalSnapshot[tablename] = snapshot[tablename];
            set(table, name, snapshot[tablename])
        }
    }
}

async function onSnapshot(snapshot){
    await firstLocalSnapshot;
    const { deleted, added, flat } = arrayChanges(Object.keys(lastLocalSnapshot), Object.keys(snapshot));
    for(const tablename of deleted){
        const [ table, name ] = JSON.parse(tablename);
        delete lastLocalSnapshot[tablename];
        _db__WEBPACK_IMPORTED_MODULE_2__["remove"](table, name);
    }
    for(const tablename of added){
        const [ table, name ] = JSON.parse(tablename);
        lastLocalSnapshot[tablename] = snapshot[tablename];
        _db__WEBPACK_IMPORTED_MODULE_2__["set"](table, name, snapshot[tablename])
    }
    for(const tablename of flat){
        if(JSON.stringify(lastLocalSnapshot[tablename]) !== JSON.stringify(snapshot[tablename])){
            const [ table, name ] = JSON.parse(tablename);
            lastLocalSnapshot[tablename] = snapshot[tablename];
            _db__WEBPACK_IMPORTED_MODULE_2__["set"](table, name, snapshot[tablename])
        }
    }
}

let unsubscribe, intervalHandler;

_firestore__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(user => {
    if(user){
        uid = user.uid;
        unsubscribe = _firestore__WEBPACK_IMPORTED_MODULE_1__["default"].collection(uid).onSnapshot(snapshot => {
            const objSnap = {};
            snapshot.docs.map(doc => {
                const data = doc.data();
                objSnap[doc.id] = data && data.value || data
            });
            onSnapshot(objSnap)
        }, err => alert(err.message));
        intervalHandler = Object(_etc_setIntervalImmediate__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
            const db = await populateLocalDB();
            firstLocalSnapshot.resolve();
            onLocalSnapshot(db)
        }, 1000);
    } else {
        uid = undefined;
        unsubscribe();
        clearInterval(intervalHandler)
    }
})


/***/ }),

/***/ "./src/app/controllers/firebase/ui.js":
/*!********************************************!*\
  !*** ./src/app/controllers/firebase/ui.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const uiConfig = {
    signInSuccessUrl: location.href,
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // to change later
    tosUrl: location.href,
    privacyPolicyUrl: location.href
}
const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);


/***/ }),

/***/ "./src/app/etc/flat.js":
/*!*****************************!*\
  !*** ./src/app/etc/flat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((table, name) => JSON.stringify([table, name]));


/***/ }),

/***/ "./src/app/etc/lang.js":
/*!*****************************!*\
  !*** ./src/app/etc/lang.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((navigator.language || navigator.userLanguage).split('-')[0]);


/***/ }),

/***/ "./src/app/etc/resolveablePromise.js":
/*!*******************************************!*\
  !*** ./src/app/etc/resolveablePromise.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Promise; });
class _Promise{
    constructor(callback){
        let _, $;
        const promise = new Promise((resolve, reject) => {
            _ = resolve;
            $ = reject;
            if(callback) callback(resolve, reject)
        });
        promise.resolve = _;
        promise.reject = $;
        return promise
    }
}


/***/ }),

/***/ "./src/app/etc/setImmediate.js":
/*!*************************************!*\
  !*** ./src/app/etc/setImmediate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ID = Math.random();
let head = {},
    tail = head;

function onmessage(e){
    if(e.data != ID) return;
    head = head.next;
    const func = head.func;
    delete head.func;
    func()
}

addEventListener('message', onmessage);

/* harmony default export */ __webpack_exports__["default"] = (func => {
    tail = tail.next = { func };
    window.postMessage(ID, '*')
});


/***/ }),

/***/ "./src/app/etc/setIntervalImmediate.js":
/*!*********************************************!*\
  !*** ./src/app/etc/setIntervalImmediate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setIntervalImmediate; });
/* harmony import */ var _setImmediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setImmediate */ "./src/app/etc/setImmediate.js");


function setIntervalImmediate(callback, ...args){
    Object(_setImmediate__WEBPACK_IMPORTED_MODULE_0__["default"])(callback);
    return setInterval(callback, ...args)
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_controllers_firebase_syncd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/controllers/firebase/syncd */ "./src/app/controllers/firebase/syncd.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/superuser/Документы/GitHub/KaMeHb-UA/test-angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map