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
/* harmony import */ var _components_note_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/note-list/component */ "./src/app/components/note-list/component.ts");
/* harmony import */ var _components_add_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-button/component */ "./src/app/components/add-button/component.ts");




class AppComponent {
    constructor() {
        this.title = 'test-angular-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "round", "btn", "shadow-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "note-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "add-button", 0);
    } }, directives: [_components_note_list_component__WEBPACK_IMPORTED_MODULE_1__["default"], _components_add_button_component__WEBPACK_IMPORTED_MODULE_2__["default"]], styles: ["add-button[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFkZC1idXR0b257XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG59XG4iXX0= */"] });
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








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"],
        _components_note_single_component__WEBPACK_IMPORTED_MODULE_5__["default"],
        _components_add_button_component__WEBPACK_IMPORTED_MODULE_6__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"],
                    _components_note_single_component__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _components_add_button_component__WEBPACK_IMPORTED_MODULE_6__["default"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_note_list_component__WEBPACK_IMPORTED_MODULE_4__["default"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db.js");



class AddButton {
    onClick() {
        const count = _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('noteCount');
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"]('noteCount', count + 1);
    }
}
AddButton.ɵfac = function AddButton_Factory(t) { return new (t || AddButton)(); };
AddButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddButton, selectors: [["add-button"]], decls: 3, vars: 0, consts: [[3, "click"], ["aria-hidden", "true", 1, "material-icons", "mdc-fab__icon"]], template: function AddButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddButton_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  background-color: #0075ff;\n  color: #fff;\n}\ndiv[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYnV0dG9uL2NvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtYnV0dG9uL2NvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc1ZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgPiBpe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
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
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-button/component */ "./src/app/components/add-button/component.ts");
/* harmony import */ var _note_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../note-single/component */ "./src/app/components/note-single/component.ts");






function NoteList_note_single_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "note-single", 1);
} if (rf & 2) {
    const noteId_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-id", noteId_r1);
} }
class NoteList {
    constructor() {
        this.notes = [];
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["onChange"]('noteCount', this.updateNotes.bind(this));
        this.updateNotes(_controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('noteCount'));
    }
    updateNotes(count) {
        this.notes = new Array(+count).fill(void 0).map((_, i) => i);
    }
}
NoteList.ɵfac = function NoteList_Factory(t) { return new (t || NoteList)(); };
NoteList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteList, selectors: [["note-list"]], decls: 2, vars: 1, consts: [["class", "shadow-1 blk-material", 4, "ngFor", "ngForOf"], [1, "shadow-1", "blk-material"]], template: function NoteList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoteList_note_single_0_Template, 1, 1, "note-single", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "add-button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _add_button_component__WEBPACK_IMPORTED_MODULE_3__["default"], _note_single_component__WEBPACK_IMPORTED_MODULE_4__["default"]], styles: ["note-list {\n  --padding: 24px;\n  --padding-bottom: 52px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: var(--padding);\n  padding: var(--padding);\n}\nnote-list.has-active {\n  grid-template: auto/minmax(200px, 600px);\n  justify-content: center;\n}\nnote-list.has-active > *:not(.active) {\n  display: none;\n}\nnote-list > add-button {\n  min-height: calc(var(--height) + var(--padding) /* blk-material */ + var(--padding-bottom) /* any note-list child */);\n}\nnote-list > add-button > div > i {\n  font-size: 48px !important;\n}\nnote-list > * {\n  --height: 80px;\n  min-height: var(--height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RlLWxpc3QvY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBR0k7RUFDSSxxSEFBQTtBQURSO0FBRVE7RUFDSSwwQkFBQTtBQUFaO0FBSUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS1saXN0L2NvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibm90ZS1saXN0e1xuICAgIC0tcGFkZGluZzogMjRweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1MnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1wYWRkaW5nKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcblxuICAgICYuaGFzLWFjdGl2ZXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIG1pbm1heCgyMDBweCwgNjAwcHgpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICA+ICo6bm90KC5hY3RpdmUpe1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gYWRkLWJ1dHRvbntcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpICsgdmFyKC0tcGFkZGluZykgLyogYmxrLW1hdGVyaWFsICovICsgdmFyKC0tcGFkZGluZy1ib3R0b20pIC8qIGFueSBub3RlLWxpc3QgY2hpbGQgKi8pO1xuICAgICAgICA+IGRpdiA+IGl7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gKiB7XG4gICAgICAgIC0taGVpZ2h0OiA4MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'note-list',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controllers_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/db */ "./src/app/controllers/db.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NoteSingle_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NoteSingle_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setDone(todo_r1.i, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NoteSingle_div_7_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setText(todo_r1.i, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", todo_r1.done ? "checked" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", todo_r1.text);
} }
function sortNote(arr) {
    return arr.filter(a => !a.done).concat(arr.filter(a => a.done));
}
function getNoteList(element) {
    return element.nodeName === 'NOTE-LIST' ? element : getNoteList(element.parentElement);
}
class NoteSingle {
    constructor(elm, renderer) {
        this.renderer = renderer;
        this.id = '';
        this.noteData = [];
        this.sortedNotes = [];
        this.count = 0;
        this.active = false;
        this.name = '';
        this.unnamed_text = 'Unnamed note';
        this.element = elm.nativeElement;
        this.getInitialData = this.getInitialData.bind(this); // to use as a predefined listener on DB changes
    }
    remove(e) {
        e.stopPropagation();
        document.activeElement.blur();
        const noteCount = _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('noteCount');
        // clear self first
        const selfCount = +_controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('note' + this.id);
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${this.id}`);
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${this.id}.name`);
        for (let i = 0; i < selfCount; i++) {
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${this.id}.${i}done`);
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${this.id}.${i}text`);
        }
        for (let id = +this.id + 1; id < noteCount; id++) {
            const count = +_controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('note' + id);
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${id - 1}`, count);
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${id - 1}.name`, _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.name`));
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${id}`);
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${id}.name`);
            for (let i = 0; i < count; i++) {
                _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${id - 1}.${i}done`, _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.${i}done`));
                _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${id - 1}.${i}text`, _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.${i}text`));
                _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${id}.${i}done`);
                _controllers_db__WEBPACK_IMPORTED_MODULE_1__["remove"](`note${id}.${i}text`);
            }
        }
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["clearCache"]();
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"]('noteCount', noteCount - 1);
        for (let id = +this.id; id < noteCount; id++)
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${id}.switch`, +!_controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.switch`));
    }
    getInitialData() {
        const id = this.element.getAttribute('data-id');
        this.id = id;
        this.name = _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.name`);
        this.count = +_controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"]('note' + id);
        this.noteData = new Array(this.count).fill(void 0).map((_, i) => ({
            done: _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.${i}done`) || false,
            text: _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${id}.${i}text`) || '',
            i,
        }));
        this.addNext();
        this.sortNotes();
    }
    ngOnInit() {
        this.getInitialData();
        this.renderer.listen(this.element, 'click', () => {
            if (this.active)
                return;
            this.active = true;
            this.renderer.addClass(this.element, 'active');
            this.renderer.addClass(getNoteList(this.element), 'has-active');
        });
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["onChange"](`note${this.id}.switch`, this.getInitialData);
    }
    ngOnDestroy() {
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["offChange"](`note${this.id}.switch`, this.getInitialData);
    }
    sortNotes() {
        this.sortedNotes = sortNote(this.noteData).filter(v => v.text).slice(0, 3);
    }
    addNext() {
        this.noteData.push({
            i: this.noteData.length,
            done: false,
            text: '',
        });
    }
    setDone(i, { checked }) {
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${this.id}.${i}done`, checked);
        this.noteData.filter(v => v.i === i)[0].done = checked;
        this.sortNotes();
    }
    setText(i, { value }) {
        if (this.count === i) {
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"]('note' + this.id, ++this.count);
            this.addNext();
        }
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${this.id}.${i}text`, value);
        this.noteData.filter(v => v.i === i)[0].text = value;
        while (i !== -1 && !value && this.count === i + 1) {
            this.noteData = this.noteData.slice(0, -1);
            _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"]('note' + this.id, --this.count);
            value = _controllers_db__WEBPACK_IMPORTED_MODULE_1__["get"](`note${this.id}.${--i}text`);
        }
        this.sortNotes();
    }
    setName({ value }) {
        this.name = value;
        _controllers_db__WEBPACK_IMPORTED_MODULE_1__["set"](`note${this.id}.name`, value);
    }
    clickCancel(e) {
        e.stopPropagation();
        this.active = false;
        this.renderer.removeClass(this.element, 'active');
        this.renderer.removeClass(getNoteList(this.element), 'has-active');
    }
}
NoteSingle.ɵfac = function NoteSingle_Factory(t) { return new (t || NoteSingle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NoteSingle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteSingle, selectors: [["note-single"]], decls: 11, vars: 7, consts: [[1, "round", "cancel", "shadow-1", 3, "click"], [1, "material-icons"], [3, "placeholder", "value", "keyup"], [4, "ngFor", "ngForOf"], [1, "delete", 3, "click"], ["type", "checkbox", 3, "change"], ["placeholder", "Text here", 3, "value", "keyup"]], template: function NoteSingle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteSingle_Template_button_click_0_listener($event) { return ctx.clickCancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NoteSingle_Template_input_keyup_5_listener($event) { return ctx.setName($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NoteSingle_div_7_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteSingle_Template_button_click_8_listener($event) { return ctx.remove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.name ? null : "unnamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name ? ctx.name : ctx.unnamed_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.unnamed_text)("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.active ? ctx.noteData : ctx.sortedNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["note-single {\n  cursor: pointer;\n  padding-bottom: var(--padding-bottom) !important;\n}\nnote-single h6 {\n  margin: 0;\n  text-align: center;\n}\nnote-single h6.unnamed {\n  color: #888;\n}\nnote-single h6, note-single h6 + input {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  line-height: 1.2;\n  border: 0;\n  width: 100%;\n  padding: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nnote-single > div > div {\n  display: flex;\n}\nnote-single input:checked + input {\n  text-decoration: line-through;\n  color: #888;\n}\nnote-single input[type=checkbox] + input {\n  border: 0;\n  border-bottom: 1px solid transparent;\n  flex-grow: 1;\n  text-overflow: ellipsis;\n}\nnote-single input[type=checkbox] + input:focus {\n  border-bottom-color: #888;\n}\nnote-single:not(.active) button.cancel {\n  display: none;\n}\nnote-single:not(.active) input {\n  pointer-events: none;\n}\nnote-single:not(.active) h6 + input {\n  display: none;\n}\nnote-single.active {\n  cursor: unset;\n}\nnote-single.active button.delete,\nnote-single.active h6 {\n  display: none;\n}\nnote-single button.cancel {\n  position: absolute;\n  top: 0;\n  left: -18px;\n}\nnote-single button.delete {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\nnote-single button.delete:hover, note-single button.delete:focus {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RlLXNpbmdsZS9jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnREFBQTtBQUNKO0FBQ0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksV0FBQTtBQUNaO0FBRVE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUtRO0VBQ0ksYUFBQTtBQUhaO0FBT0k7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFMUjtBQVFJO0VBQ0ksU0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBTlI7QUFRUTtFQUNJLHlCQUFBO0FBTlo7QUFXUTtFQUNJLGFBQUE7QUFUWjtBQVlRO0VBQ0ksb0JBQUE7QUFWWjtBQWFRO0VBQ0ksYUFBQTtBQVhaO0FBZUk7RUFDSSxhQUFBO0FBYlI7QUFlUTs7RUFFSSxhQUFBO0FBYlo7QUFpQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBZlI7QUFrQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJSO0FBa0JRO0VBRUksVUFBQTtBQWpCWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS1zaW5nbGUvY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJub3RlLXNpbmdsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKSAhaW1wb3J0YW50O1xuXG4gICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmLnVubmFtZWR7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgfVxuXG4gICAgICAgICYsICsgaW5wdXR7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgPiBkaXZ7XG4gICAgICAgID4gZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0OmNoZWNrZWQgKyBpbnB1dHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgaW5wdXR7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSl7XG4gICAgICAgIGJ1dHRvbi5jYW5jZWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2ICsgaW5wdXR7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmV7XG4gICAgICAgIGN1cnNvcjogdW5zZXQ7XG4gICAgICAgIFxuICAgICAgICBidXR0b24uZGVsZXRlLFxuICAgICAgICBoNntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24uY2FuY2Vse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTE4cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLmRlbGV0ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXN7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteSingle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'note-single',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/db.js":
/*!***********************************!*\
  !*** ./src/app/controllers/db.js ***!
  \***********************************/
/*! exports provided: get, set, remove, onChange, offChange, clearCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChange", function() { return onChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offChange", function() { return offChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
const cache = Object.create(null);
const handlers = Object.create(null);

function get(name){
    if(!(name in cache)){
        const raw = localStorage.getItem(name);
        try{
            cache[name] = JSON.parse(raw)
        } catch(e){
            cache[name] = null
        }
    }
    return cache[name]
}

function set(name, value){
    value = JSON.parse(JSON.stringify(value));
    localStorage.setItem(name, JSON.stringify(value));
    cache[name] = value;
    for(const handler of handlers['u:' + name] || []) handler(value, 'update')
}

function remove(name){
    localStorage.removeItem(name);
    for(const handler of handlers['d:' + name] || []) handler(void 0, 'remove')
}

function addHandler(name, handler){
    if(!handlers[name]) handlers[name] = [];
    handlers[name].push(handler) - 1
}

function removeHandler(name, handler){
    if(!handlers[name]) handlers[name] = [];
    handlers[name] = (handlers[name] || []).filter(v => v !== handler)
}

function onChange(name, callback){
    addHandler('u:' + name, callback);
    addHandler('d:' + name, callback)
}

function offChange(name, callback){
    removeHandler('u:' + name, callback);
    removeHandler('d:' + name, callback)
}

function clearCache(){
    for(const i in cache) delete cache[i]
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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