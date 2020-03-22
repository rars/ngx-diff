function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scss_new_age_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../scss/new-age.scss */
    "./src/scss/new-age.scss");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-diff */
    "./node_modules/ngx-diff/__ivy_ngcc__/fesm2015/ngx-diff.js");

    var _c0 = function _c0(a0) {
      return {
        "navbar-shrink": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "collapse": a0
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
        this.oldText = 'apples\noranges\nkiwis\ncarrots\n';
        this.newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';
        this.navbarShrink = false;
        this.navbarCollapse = true;
      }

      _createClass(AppComponent, [{
        key: "onScroll",
        value: function onScroll(event) {
          if (event.target.scrollingElement.scrollTop > 100) {
            this.navbarShrink = true;
          } else {
            this.navbarShrink = false;
          }
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          this.navbarCollapse = !this.navbarCollapse;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 96,
      vars: 11,
      consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", 3, "ngClass"], [1, "container"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger"], ["type", "button", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right", 3, "click"], [1, "fa", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#download", 1, "nav-link", "js-scroll-trigger"], ["href", "#demo", 1, "nav-link", "js-scroll-trigger"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger"], [1, "masthead"], [1, "container", "h-100"], [1, "row", "h-100"], [1, "col-lg-7", "my-auto"], [1, "header-content", "mx-auto"], [1, "mb-5"], ["href", "#download", 1, "btn", "btn-outline", "btn-xl", "js-scroll-trigger"], [1, "col-lg-5", "my-auto"], [1, "device-container"], [1, "device-mockup", "iphone6_plus", "portrait", "white"], [1, "device"], [1, "screen"], ["src", "img/demo-screen-1.jpg", "alt", "", 1, "img-fluid"], [1, "button"], ["id", "download", 1, "download", "bg-primary", "text-center"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "section-heading"], [1, "col-lg-6"], [1, "feature-item"], [1, "h1", "icon-present"], [1, "h1", "icon-lock-open"], ["id", "demo", 1, "features"], [1, "section-heading", "text-center"], [1, "text-muted"], [1, "col-12", "col-lg-6"], [2, "width", "100%", "height", "200px", 3, "ngModel", "ngModelChange"], [1, "col-12"], [2, "width", "100%", 3, "oldText", "newText", "lineContextSize"], ["id", "contact", 1, "contact", "bg-primary"], [1, "list-inline", "list-social"], [1, "list-inline-item", "social-twitter"], ["href", "https://twitter.com/RichardRustle"], [1, "fa", "fa-twitter"], [1, "list-inline-item", "social-github"], ["href", "https://github.com/rars/ngx-diff"], [1, "fa", "fa-github"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-diff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener($event) {
            return ctx.toggleCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "header", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ngx-diff is an Angular library for displaying diffs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Download Now for Free!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Available on npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ngx-diff is available for download on npm! Download now to get started!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "npm install --save ngx-diff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Free to Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "This library is free to download and use for any purpose!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Open Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Since this library is MIT licensed, you can use it commercially!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Try it out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Try editing the text below to see how the diff updates!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "textarea", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_71_listener($event) {
            return ctx.oldText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "After");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "textarea", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_75_listener($event) {
            return ctx.newText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Displayed diff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "inline-diff", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Available on GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\xA9 2018 Richard Russell. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.navbarShrink));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.navbarCollapse));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oldText", ctx.oldText)("newText", ctx.newText)("lineContextSize", 4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_diff__WEBPACK_IMPORTED_MODULE_4__["InlineDiffComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, {
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-diff */
    "./node_modules/ngx-diff/__ivy_ngcc__/fesm2015/ngx-diff.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_diff__WEBPACK_IMPORTED_MODULE_3__["NgxDiffModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_diff__WEBPACK_IMPORTED_MODULE_3__["NgxDiffModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_diff__WEBPACK_IMPORTED_MODULE_3__["NgxDiffModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  "./src/scss/new-age.scss":
  /*!*******************************!*\
    !*** ./src/scss/new-age.scss ***!
    \*******************************/

  /*! exports provided: default */

  /***/
  function srcScssNewAgeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Muli\", \"Helvetica\", \"Arial\", \"sans-serif\";\n}\n\na {\n  color: #fdcc52;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n\na:hover, a:focus {\n  color: #fcbd20;\n}\n\nhr {\n  max-width: 100px;\n  margin: 25px auto 0;\n  border-width: 1px;\n  border-color: rgba(34, 34, 34, 0.1);\n}\n\nhr.light {\n  border-color: white;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Catamaran\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\np {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\nsection {\n  padding: 100px 0;\n}\n\nsection h2 {\n  font-size: 50px;\n}\n\n#mainNav {\n  border-color: rgba(34, 34, 34, 0.05);\n  background-color: white;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  font-family: \"Catamaran\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\n#mainNav .navbar-brand {\n  color: #fdcc52;\n  font-family: \"Catamaran\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n\n#mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n  color: #fcbd20;\n}\n\n#mainNav .navbar-toggler {\n  font-size: 12px;\n  padding: 8px 10px;\n  color: #222222;\n}\n\n#mainNav .navbar-nav > li > a {\n  font-size: 11px;\n  font-family: \"Lato\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n#mainNav .navbar-nav > li > a.active {\n  color: #fdcc52 !important;\n  background-color: transparent;\n}\n\n#mainNav .navbar-nav > li > a.active:hover {\n  background-color: transparent;\n}\n\n#mainNav .navbar-nav > li > a,\n#mainNav .navbar-nav > li > a:focus {\n  color: #222222;\n}\n\n#mainNav .navbar-nav > li > a:hover,\n#mainNav .navbar-nav > li > a:focus:hover {\n  color: #fdcc52;\n}\n\n@media (min-width: 992px) {\n  #mainNav {\n    border-color: transparent;\n    background-color: transparent;\n  }\n  #mainNav .navbar-brand {\n    color: fade(white, 70%);\n  }\n  #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n    color: white;\n  }\n  #mainNav .navbar-nav > li > a,\n#mainNav .navbar-nav > li > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  #mainNav .navbar-nav > li > a:hover,\n#mainNav .navbar-nav > li > a:focus:hover {\n    color: white;\n  }\n  #mainNav.navbar-shrink {\n    border-color: rgba(34, 34, 34, 0.1);\n    background-color: white;\n  }\n  #mainNav.navbar-shrink .navbar-brand {\n    color: #222222;\n  }\n  #mainNav.navbar-shrink .navbar-brand:hover, #mainNav.navbar-shrink .navbar-brand:focus {\n    color: #fdcc52;\n  }\n  #mainNav.navbar-shrink .navbar-nav > li > a,\n#mainNav.navbar-shrink .navbar-nav > li > a:focus {\n    color: #222222;\n  }\n  #mainNav.navbar-shrink .navbar-nav > li > a:hover,\n#mainNav.navbar-shrink .navbar-nav > li > a:focus:hover {\n    color: #fdcc52;\n  }\n}\n\nheader.masthead {\n  position: relative;\n  width: 100%;\n  padding-top: 150px;\n  padding-bottom: 100px;\n  color: white;\n  background: url(\"/assets/img/bg-pattern.png\"), #7b4397;\n  background: url(\"/assets/img/bg-pattern.png\"), -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\n  background: url(\"/assets/img/bg-pattern.png\"), linear-gradient(to left, #7b4397, #dc2430);\n}\n\nheader.masthead .header-content {\n  max-width: 500px;\n  margin-bottom: 100px;\n  text-align: center;\n}\n\nheader.masthead .header-content h1 {\n  font-size: 30px;\n}\n\nheader.masthead .device-container {\n  max-width: 325px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nheader.masthead .device-container .screen img {\n  border-radius: 3px;\n}\n\n@media (min-width: 992px) {\n  header.masthead {\n    height: 100vh;\n    min-height: 775px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  header.masthead .header-content {\n    margin-bottom: 0;\n    text-align: left;\n  }\n  header.masthead .header-content h1 {\n    font-size: 50px;\n  }\n  header.masthead .device-container {\n    max-width: 325px;\n  }\n}\n\nsection.download {\n  position: relative;\n  padding: 150px 0;\n}\n\nsection.download h2 {\n  font-size: 50px;\n  margin-top: 0;\n}\n\nsection.download .badges .badge-link {\n  display: block;\n  margin-bottom: 25px;\n}\n\nsection.download .badges .badge-link:last-child {\n  margin-bottom: 0;\n}\n\nsection.download .badges .badge-link img {\n  height: 60px;\n}\n\n@media (min-width: 768px) {\n  section.download .badges .badge-link {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  section.download h2 {\n    font-size: 70px;\n  }\n}\n\nsection.features .section-heading {\n  margin-bottom: 100px;\n}\n\nsection.features .section-heading h2 {\n  margin-top: 0;\n}\n\nsection.features .section-heading p {\n  margin-bottom: 0;\n}\n\nsection.features .device-container,\nsection.features .feature-item {\n  max-width: 325px;\n  margin: 0 auto;\n}\n\nsection.features .device-container {\n  margin-bottom: 100px;\n}\n\n@media (min-width: 992px) {\n  section.features .device-container {\n    margin-bottom: 0;\n  }\n}\n\nsection.features .feature-item {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center;\n}\n\nsection.features .feature-item h3 {\n  font-size: 30px;\n}\n\nsection.features .feature-item i {\n  font-size: 80px;\n  display: block;\n  margin-bottom: 15px;\n  background: -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\n  background: linear-gradient(to left, #7b4397, #dc2430);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nsection.cta {\n  position: relative;\n  padding: 250px 0;\n  background-image: url(\"/assets/img/bg-cta.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\nsection.cta .cta-content {\n  position: relative;\n  z-index: 1;\n}\n\nsection.cta .cta-content h2 {\n  font-size: 50px;\n  max-width: 450px;\n  margin-top: 0;\n  margin-bottom: 25px;\n  color: white;\n}\n\n@media (min-width: 768px) {\n  section.cta .cta-content h2 {\n    font-size: 80px;\n  }\n}\n\nsection.cta .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\nsection.contact {\n  text-align: center;\n}\n\nsection.contact h2 {\n  margin-top: 0;\n  margin-bottom: 25px;\n}\n\nsection.contact h2 i {\n  color: #dd4b39;\n}\n\nsection.contact ul.list-social {\n  margin-bottom: 0;\n}\n\nsection.contact ul.list-social li a {\n  font-size: 40px;\n  line-height: 80px;\n  display: block;\n  width: 80px;\n  height: 80px;\n  color: white;\n  border-radius: 100%;\n}\n\nsection.contact ul.list-social li.social-twitter a {\n  background-color: #1da1f2;\n}\n\nsection.contact ul.list-social li.social-twitter a:hover {\n  background-color: #0d95e8;\n}\n\nsection.contact ul.list-social li.social-github a {\n  background-color: #24292e;\n}\n\nsection.contact ul.list-social li.social-github a:hover {\n  background-color: #191c20;\n}\n\nsection.contact ul.list-social li.social-google-plus a {\n  background-color: #dd4b39;\n}\n\nsection.contact ul.list-social li.social-google-plus a:hover {\n  background-color: #d73925;\n}\n\nfooter {\n  padding: 25px 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #222222;\n}\n\nfooter p {\n  font-size: 12px;\n  margin: 0;\n}\n\nfooter ul {\n  margin-bottom: 0;\n}\n\nfooter ul li a {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.3);\n}\n\nfooter ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {\n  text-decoration: none;\n}\n\n.bg-primary {\n  background: #fdcc52;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fdcc52), to(#fdc539));\n  background: linear-gradient(#fdcc52, #fdc539);\n}\n\n.text-primary {\n  color: #fdcc52;\n}\n\n.no-gutter > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.btn-outline {\n  color: white;\n  border: 1px solid;\n  border-color: white;\n}\n\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {\n  color: white;\n  border-color: #fdcc52;\n  background-color: #fdcc52;\n}\n\n.btn {\n  border-radius: 300px;\n  font-family: \"Lato\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.btn-xl {\n  font-size: 11px;\n  padding: 15px 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL0M6XFxkZXZcXHdlYlxcbmd4LWRpZmYvc3JjXFxzY3NzXFxfZ2xvYmFsLnNjc3MiLCJzcmMvc2Nzcy9uZXctYWdlLnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL3Njc3MvQzpcXGRldlxcd2ViXFxuZ3gtZGlmZi9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9zY3NzL0M6XFxkZXZcXHdlYlxcbmd4LWRpZmYvc3JjXFxzY3NzXFxfbmF2YmFyLnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX21hc3RoZWFkLnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX2Rvd25sb2FkLnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX2ZlYXR1cmVzLnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX2N0YS5zY3NzIiwic3JjL3Njc3MvQzpcXGRldlxcd2ViXFxuZ3gtZGlmZi9zcmNcXHNjc3NcXF9jb250YWN0LnNjc3MiLCJzcmMvc2Nzcy9DOlxcZGV2XFx3ZWJcXG5neC1kaWZmL3NyY1xcc2Nzc1xcX2Zvb3Rlci5zY3NzIiwic3JjL3Njc3MvQzpcXGRldlxcd2ViXFxuZ3gtZGlmZi9zcmNcXHNjc3NcXF9ib290c3RyYXAtb3ZlcnJpZGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFRWdFSSx1REFBQTtBRC9ESjs7QURHQTtFQUNJLGNHUmU7RURGZiw2QkFBQTtFQUVBLHFCQUFBO0FEV0o7O0FEREk7RUFFSSxjQUFBO0FDRVI7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtB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OztBVTlWSTtFQUlJLFlBQUE7RUFDQSxxQlJyQlc7RVFzQlgseUJSdEJXO0FGbVhuQjs7QVV6VkE7RUFDSSxvQkFBQTtFVDRDQSx1REFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURpVEo7O0FVM1ZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FWOFZKIiwiZmlsZSI6InNyYy9zY3NzL25ldy1hZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbCBzdHlsaW5nIGZvciB0aGlzIHRlbXBsYXRlXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgQGluY2x1ZGUgYm9keS1mb250O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAkdGhlbWUtcHJpbWFyeTtcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYWxsO1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoZW1lLXByaW1hcnksIDEwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRncmF5LWRhcmtlciwgLjkpO1xyXG59XHJcblxyXG5oci5saWdodCB7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctZm9udDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxufVxyXG4iLCJodG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJNdWxpXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgXCJzYW5zLXNlcmlmXCI7XG59XG5cbmEge1xuICBjb2xvcjogI2ZkY2M1MjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG59XG5hOmhvdmVyLCBhOmZvY3VzIHtcbiAgY29sb3I6ICNmY2JkMjA7XG59XG5cbmhyIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjEpO1xufVxuXG5oci5saWdodCB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdGFtYXJhblwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cbnNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbiNtYWluTmF2IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuMDUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdGFtYXJhblwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIFwic2Fucy1zZXJpZlwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmRjYzUyO1xuICBmb250LWZhbWlseTogXCJDYXRhbWFyYW5cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICBjb2xvcjogI2ZjYmQyMDtcbn1cbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBcInNhbnMtc2VyaWZcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkgPiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmRjYzUyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaSA+IGEuYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpID4gYSxcbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlcixcbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzOmhvdmVyIHtcbiAgY29sb3I6ICNmZGNjNTI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6IGZhZGUod2hpdGUsIDcwJSk7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciwgI21haW5OYXYgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkgPiBhLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1czpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gIH1cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kOmhvdmVyLCAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmRjYzUyO1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1uYXYgPiBsaSA+IGEsXG4jbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgfVxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyLFxuI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1czpob3ZlciB7XG4gICAgY29sb3I6ICNmZGNjNTI7XG4gIH1cbn1cblxuaGVhZGVyLm1hc3RoZWFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvYmctcGF0dGVybi5wbmdcIiksICM3YjQzOTc7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2JnLXBhdHRlcm4ucG5nXCIpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjN2I0Mzk3LCAjZGMyNDMwKTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvYmctcGF0dGVybi5wbmdcIiksIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjN2I0Mzk3LCAjZGMyNDMwKTtcbn1cbmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmhlYWRlci5tYXN0aGVhZCAuZGV2aWNlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzI1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5oZWFkZXIubWFzdGhlYWQgLmRldmljZS1jb250YWluZXIgLnNjcmVlbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaGVhZGVyLm1hc3RoZWFkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDc3NXB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIGhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBoZWFkZXIubWFzdGhlYWQgLmhlYWRlci1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgaGVhZGVyLm1hc3RoZWFkIC5kZXZpY2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDMyNXB4O1xuICB9XG59XG5cbnNlY3Rpb24uZG93bmxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1MHB4IDA7XG59XG5zZWN0aW9uLmRvd25sb2FkIGgyIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuc2VjdGlvbi5kb3dubG9hZCAuYmFkZ2VzIC5iYWRnZS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5zZWN0aW9uLmRvd25sb2FkIC5iYWRnZXMgLmJhZGdlLWxpbms6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5zZWN0aW9uLmRvd25sb2FkIC5iYWRnZXMgLmJhZGdlLWxpbmsgaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24uZG93bmxvYWQgLmJhZGdlcyAuYmFkZ2UtbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uLmRvd25sb2FkIGgyIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cbn1cblxuc2VjdGlvbi5mZWF0dXJlcyAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5zZWN0aW9uLmZlYXR1cmVzIC5zZWN0aW9uLWhlYWRpbmcgaDIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuc2VjdGlvbi5mZWF0dXJlcyAuc2VjdGlvbi1oZWFkaW5nIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuc2VjdGlvbi5mZWF0dXJlcyAuZGV2aWNlLWNvbnRhaW5lcixcbnNlY3Rpb24uZmVhdHVyZXMgLmZlYXR1cmUtaXRlbSB7XG4gIG1heC13aWR0aDogMzI1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuc2VjdGlvbi5mZWF0dXJlcyAuZGV2aWNlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIHNlY3Rpb24uZmVhdHVyZXMgLmRldmljZS1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbnNlY3Rpb24uZmVhdHVyZXMgLmZlYXR1cmUtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5mZWF0dXJlcyAuZmVhdHVyZS1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuc2VjdGlvbi5mZWF0dXJlcyAuZmVhdHVyZS1pdGVtIGkge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjN2I0Mzk3LCAjZGMyNDMwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3YjQzOTcsICNkYzI0MzApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5zZWN0aW9uLmN0YSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjUwcHggMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmctY3RhLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbnNlY3Rpb24uY3RhIC5jdGEtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbnNlY3Rpb24uY3RhIC5jdGEtY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24uY3RhIC5jdGEtY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG5zZWN0aW9uLmN0YSAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbnNlY3Rpb24uY29udGFjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24uY29udGFjdCBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5zZWN0aW9uLmNvbnRhY3QgaDIgaSB7XG4gIGNvbG9yOiAjZGQ0YjM5O1xufVxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaSBhIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaS5zb2NpYWwtdHdpdHRlciBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkYTFmMjtcbn1cbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaS5zb2NpYWwtdHdpdHRlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkOTVlODtcbn1cbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaS5zb2NpYWwtZ2l0aHViIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1naXRodWIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFjMjA7XG59XG5zZWN0aW9uLmNvbnRhY3QgdWwubGlzdC1zb2NpYWwgbGkuc29jaWFsLWdvb2dsZS1wbHVzIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1nb29nbGUtcGx1cyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MzkyNTtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG5mb290ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufVxuZm9vdGVyIHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmZvb3RlciB1bCBsaSBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuZm9vdGVyIHVsIGxpIGE6aG92ZXIsIGZvb3RlciB1bCBsaSBhOmZvY3VzLCBmb290ZXIgdWwgbGkgYTphY3RpdmUsIGZvb3RlciB1bCBsaSBhLmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZmRjYzUyO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmRjYzUyLCAjZmRjNTM5KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZGNjNTIsICNmZGM1MzkpO1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZGNjNTI7XG59XG5cbi5uby1ndXR0ZXIgPiBbY2xhc3MqPWNvbC1dIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmU6Zm9jdXMsIC5idG4tb3V0bGluZTphY3RpdmUsIC5idG4tb3V0bGluZS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogI2ZkY2M1MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkY2M1Mjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idG4teGwge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDE1cHggNDVweDtcbn0iLCIvLyBNaXhpbnNcclxuQG1peGluIHRyYW5zaXRpb24tYWxsKCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtY292ZXIoKSB7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIpIHtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgICY6Zm9jdXMsXHJcbiAgICAmLmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDI1JSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlLFxyXG4gICAgJi5hY3RpdmUsXHJcbiAgICAub3BlbiA+ICYuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmLmZvY3VzIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMjUlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxNyUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6YWN0aXZlLFxyXG4gICAgJi5hY3RpdmUsXHJcbiAgICAub3BlbiA+ICYuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG4gICAgJi5kaXNhYmxlZCxcclxuICAgICZbZGlzYWJsZWRdLFxyXG4gICAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmLmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgJ3NhbnMtc2VyaWYnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBib2R5LWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgJ0hlbHZldGljYScsICdBcmlhbCcsICdzYW5zLXNlcmlmJztcclxufVxyXG5cclxuQG1peGluIGFsdC1mb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCAnc2Fucy1zZXJpZic7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iLCIvLyBWYXJpYWJsZXNcclxuXHJcbi8vIEdyYXkgYW5kIEJyYW5kIENvbG9ycyBmb3IgdXNlIGFjcm9zcyB0aGVtZVxyXG5cclxuJHRoZW1lLXByaW1hcnk6ICAgICNmZGNjNTI7XHJcbiR0aGVtZS1zZWNvbmRhcnk6ICAjN2I0Mzk3O1xyXG4kdGhlbWUtdGVydGlhcnk6ICAgI2RjMjQzMDtcclxuXHJcbiRncmF5LWJhc2U6ICAgICAgICAjMDAwO1xyXG4kZ3JheS1kYXJrZXI6ICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAxMy41JSk7IC8vICMyMjJcclxuJGdyYXktZGFyazogICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKTsgICAvLyAjMzMzXHJcbiRncmF5OiAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKTsgLy8gIzU1NVxyXG4kZ3JheS1saWdodDogICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA0Ni43JSk7IC8vICM3NzdcclxuJGdyYXktbGlnaHRlcjogICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpOyAvLyAjZWVlXHJcblxyXG4kYnJhbmQtdHdpdHRlcjpcdFx0IzFkYTFmMjtcclxuJGJyYW5kLWZhY2Vib29rOlx0IzNiNTk5ODtcclxuJGJyYW5kLWdvb2dsZS1wbHVzOlx0I2RkNGIzOTtcclxuJGJyYW5kLWdpdGh1YjogIzI0MjkyZTtcclxuIiwiLy8gU3R5bGluZyBmb3IgdGhlIG5hdmJhclxyXG4jbWFpbk5hdiB7XHJcbiAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRncmF5LWRhcmtlciwgLjk1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1hbGw7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLWZvbnQ7XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBjb2xvcjogJHRoZW1lLXByaW1hcnk7XHJcbiAgICAgICAgQGluY2x1ZGUgaGVhZGluZy1mb250O1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHRoZW1lLXByaW1hcnksIDEwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LWRhcmtlcjtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFsdC1mb250O1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiBhLFxyXG4gICAgICAgICAgICA+IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcmtlcjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBmYWRlKHdoaXRlLCA3MCUpO1xyXG4gICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyLW5hdiA+IGxpID4gYSxcclxuICAgICAgICAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBmYWRlLW91dCh3aGl0ZSwgLjMpO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm5hdmJhci1zaHJpbmsge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRncmF5LWRhcmtlciwgLjkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktZGFya2VyO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyLW5hdiA+IGxpID4gYSxcclxuICAgICAgICAgICAgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcmtlcjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBTdHlsaW5nIGZvciB0aGUgbWFzdGhlYWRcclxuaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnLXBhdHRlcm4ucG5nJyksICR0aGVtZS1zZWNvbmRhcnk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnLXBhdHRlcm4ucG5nJyksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICR0aGVtZS1zZWNvbmRhcnksICR0aGVtZS10ZXJ0aWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnLXBhdHRlcm4ucG5nJyksIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAkdGhlbWUtc2Vjb25kYXJ5LCAkdGhlbWUtdGVydGlhcnkpO1xyXG4gICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldmljZS1jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMzI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIC5zY3JlZW4gaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzc1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gU3R5bGluZyBmb3IgdGhlIGRvd25sb2FkIHNlY3Rpb25cclxuc2VjdGlvbi5kb3dubG9hZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlcyB7XHJcbiAgICAgICAgLmJhZGdlLWxpbmsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFN0eWxpbmcgZm9yIHRoZSBmZWF0dXJlcyBzZWN0aW9uXHJcbnNlY3Rpb24uZmVhdHVyZXMge1xyXG4gICAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGV2aWNlLWNvbnRhaW5lcixcclxuICAgIC5mZWF0dXJlLWl0ZW0ge1xyXG4gICAgICAgIG1heC13aWR0aDogMzI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAuZGV2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAkdGhlbWUtc2Vjb25kYXJ5LCAkdGhlbWUtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHRoZW1lLXNlY29uZGFyeSwgJHRoZW1lLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gU3R5bGluZyBmb3IgdGhlIGNhbGwgdG8gYWN0aW9uIHNlY3Rpb25cclxuc2VjdGlvbi5jdGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjUwcHggMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmctY3RhLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgYmFja2dyb3VuZC1jb3ZlcjtcclxuICAgIC5jdGEtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KGJsYWNrLCAuNSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gU3R5bGluZyBmb3IgdGhlIGRvd25sb2FkIHNlY3Rpb25cclxuc2VjdGlvbi5jb250YWN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYnJhbmQtZ29vZ2xlLXBsdXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdWwubGlzdC1zb2NpYWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zb2NpYWwtdHdpdHRlciB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtdHdpdHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRicmFuZC10d2l0dGVyLCA1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc29jaWFsLWdpdGh1YiB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtZ2l0aHViO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWdpdGh1YiwgNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNvY2lhbC1nb29nbGUtcGx1cyB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtZ29vZ2xlLXBsdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQtZ29vZ2xlLXBsdXMsIDUlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gU3R5bGluZyBmb3IgdGhlIGZvb3RlclxyXG5mb290ZXIge1xyXG4gICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGZhZGUtb3V0KHdoaXRlLCAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBmYWRlLW91dCh3aGl0ZSwgLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQm9vdHN0cmFwIG92ZXJyaWRlcyBmb3IgdGhpcyB0ZW1wbGF0ZVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtcHJpbWFyeTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCR0aGVtZS1wcmltYXJ5LCBkYXJrZW4oJHRoZW1lLXByaW1hcnksIDUlKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHRoZW1lLXByaW1hcnksIGRhcmtlbigkdGhlbWUtcHJpbWFyeSwgNSUpKTtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLXByaW1hcnk7XHJcbn1cclxuXHJcbi5uby1ndXR0ZXIgPiBbY2xhc3MqPSdjb2wtJ10ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjphY3RpdmUsXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLXByaW1hcnk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLXByaW1hcnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICBAaW5jbHVkZSBhbHQtZm9udDtcclxufVxyXG5cclxuLmJ0bi14bCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQ1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\dev\web\ngx-diff\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map