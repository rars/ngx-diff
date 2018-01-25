webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" [ngClass]=\"{'navbar-shrink': navbarShrink}\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">ngx-diff</a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"toggleCollapse()\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      Menu\r\n      <i class=\"fa fa-bars\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{'collapse': navbarCollapse}\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#download\">Download</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#demo\">Demo</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<header class=\"masthead\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row h-100\">\r\n      <div class=\"col-lg-7 my-auto\">\r\n        <div class=\"header-content mx-auto\">\r\n          <h1 class=\"mb-5\">ngx-diff is an Angular library for displaying diffs</h1>\r\n          <a href=\"#download\" class=\"btn btn-outline btn-xl js-scroll-trigger\">Download Now for Free!</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 my-auto\">\r\n        <div class=\"device-container\">\r\n          <div class=\"device-mockup iphone6_plus portrait white\">\r\n            <div class=\"device\">\r\n              <div class=\"screen\">\r\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\r\n                <img src=\"img/demo-screen-1.jpg\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n              <div class=\"button\">\r\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section class=\"download bg-primary text-center\" id=\"download\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 mx-auto\">\r\n        <h2 class=\"section-heading\">Available on npm</h2>\r\n        <p>ngx-diff is available for download on npm! Download now to get started!</p>\r\n        <pre>npm install --save ngx-diff</pre>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"feature-item\">\r\n          <i class=\"h1 icon-present\"></i>\r\n          <h3>Free to Use</h3>\r\n          <p>This library is free to download and use for any purpose!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"feature-item\">\r\n          <i class=\"h1 icon-lock-open\"></i>\r\n          <h3>Open Source</h3>\r\n          <p>Since this library is MIT licensed, you can use it commercially!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"features\" id=\"demo\">\r\n  <div class=\"container\">\r\n    <div class=\"section-heading text-center\">\r\n      <h2>Try it out</h2>\r\n      <p class=\"text-muted\">Try editing the text below to see how the diff updates!</p>\r\n      <hr>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-lg-6\">\r\n        <h3>Before</h3>\r\n        <textarea [(ngModel)]=\"oldText\" style=\"width: 100%; height: 200px;\"></textarea>\r\n      </div>\r\n      <div class=\"col-12 col-lg-6\">\r\n        <h3>After</h3>\r\n        <textarea [(ngModel)]=\"newText\" style=\"width: 100%; height: 200px;\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <h3>Displayed diff</h3>\r\n        <inline-diff [oldText]=\"oldText\" [newText]=\"newText\" [lineContextSize]=\"4\" style=\"width: 100%;\">\r\n        </inline-diff>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"contact bg-primary\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <h2>Available on GitHub</h2>\r\n    <ul class=\"list-inline list-social\">\r\n      <li class=\"list-inline-item social-twitter\">\r\n        <a href=\"https://twitter.com/RichardRustle\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-inline-item social-github\">\r\n        <a href=\"https://github.com/rars/ngx-diff\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n\r\n<footer>\r\n  <div class=\"container\">\r\n    <p>&copy; 2018 Richard Russell. All Rights Reserved.</p>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_new_age_scss__ = __webpack_require__("../../../../../src/scss/new-age.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_new_age_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_new_age_scss__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.oldText = 'apples\noranges\nkiwis\ncarrots\n';
        this.newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';
        this.navbarShrink = false;
        this.navbarCollapse = true;
    }
    AppComponent.prototype.onScroll = function (event) {
        if (event.target.scrollingElement.scrollTop > 100) {
            this.navbarShrink = true;
        }
        else {
            this.navbarShrink = false;
        }
    };
    AppComponent.prototype.toggleCollapse = function () {
        this.navbarCollapse = !this.navbarCollapse;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_diff__ = __webpack_require__("../../../../ngx-diff/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_diff__["NgxDiffModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/scss/new-age.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif'; }\n\na {\n  color: #fdcc52;\n  -webkit-transition: all .35s;\n  transition: all .35s; }\n\na:hover, a:focus {\n    color: #fcbd20; }\n\nhr {\n  max-width: 100px;\n  margin: 25px auto 0;\n  border-width: 1px;\n  border-color: rgba(34, 34, 34, 0.1); }\n\nhr.light {\n  border-color: white; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px; }\n\np {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 20px; }\n\nsection {\n  padding: 100px 0; }\n\nsection h2 {\n    font-size: 50px; }\n\n#mainNav {\n  border-color: rgba(34, 34, 34, 0.05);\n  background-color: white;\n  -webkit-transition: all .35s;\n  transition: all .35s;\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px; }\n\n#mainNav .navbar-brand {\n    color: #fdcc52;\n    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n    font-weight: 200;\n    letter-spacing: 1px; }\n\n#mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n      color: #fcbd20; }\n\n#mainNav .navbar-toggler {\n    font-size: 12px;\n    padding: 8px 10px;\n    color: #222222; }\n\n#mainNav .navbar-nav > li > a {\n    font-size: 11px;\n    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n\n#mainNav .navbar-nav > li > a.active {\n      color: #fdcc52 !important;\n      background-color: transparent; }\n\n#mainNav .navbar-nav > li > a.active:hover {\n        background-color: transparent; }\n\n#mainNav .navbar-nav > li > a,\n  #mainNav .navbar-nav > li > a:focus {\n    color: #222222; }\n\n#mainNav .navbar-nav > li > a:hover,\n    #mainNav .navbar-nav > li > a:focus:hover {\n      color: #fdcc52; }\n\n@media (min-width: 992px) {\n    #mainNav {\n      border-color: transparent;\n      background-color: transparent; }\n      #mainNav .navbar-brand {\n        color: fade(white, 70%); }\n        #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n          color: white; }\n      #mainNav .navbar-nav > li > a,\n      #mainNav .navbar-nav > li > a:focus {\n        color: rgba(255, 255, 255, 0.7); }\n        #mainNav .navbar-nav > li > a:hover,\n        #mainNav .navbar-nav > li > a:focus:hover {\n          color: white; }\n      #mainNav.navbar-shrink {\n        border-color: rgba(34, 34, 34, 0.1);\n        background-color: white; }\n        #mainNav.navbar-shrink .navbar-brand {\n          color: #222222; }\n          #mainNav.navbar-shrink .navbar-brand:hover, #mainNav.navbar-shrink .navbar-brand:focus {\n            color: #fdcc52; }\n        #mainNav.navbar-shrink .navbar-nav > li > a,\n        #mainNav.navbar-shrink .navbar-nav > li > a:focus {\n          color: #222222; }\n          #mainNav.navbar-shrink .navbar-nav > li > a:hover,\n          #mainNav.navbar-shrink .navbar-nav > li > a:focus:hover {\n            color: #fdcc52; } }\n\nheader.masthead {\n  position: relative;\n  width: 100%;\n  padding-top: 150px;\n  padding-bottom: 100px;\n  color: white;\n  background: url(\"/assets/img/bg-pattern.png\"), #7b4397;\n  background: url(\"/assets/img/bg-pattern.png\"), -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\n  background: url(\"/assets/img/bg-pattern.png\"), linear-gradient(to left, #7b4397, #dc2430); }\n\nheader.masthead .header-content {\n    max-width: 500px;\n    margin-bottom: 100px;\n    text-align: center; }\n\nheader.masthead .header-content h1 {\n      font-size: 30px; }\n\nheader.masthead .device-container {\n    max-width: 325px;\n    margin-right: auto;\n    margin-left: auto; }\n\nheader.masthead .device-container .screen img {\n      border-radius: 3px; }\n\n@media (min-width: 992px) {\n    header.masthead {\n      height: 100vh;\n      min-height: 775px;\n      padding-top: 0;\n      padding-bottom: 0; }\n      header.masthead .header-content {\n        margin-bottom: 0;\n        text-align: left; }\n        header.masthead .header-content h1 {\n          font-size: 50px; }\n      header.masthead .device-container {\n        max-width: 325px; } }\n\nsection.download {\n  position: relative;\n  padding: 150px 0; }\n\nsection.download h2 {\n    font-size: 50px;\n    margin-top: 0; }\n\nsection.download .badges .badge-link {\n    display: block;\n    margin-bottom: 25px; }\n\nsection.download .badges .badge-link:last-child {\n      margin-bottom: 0; }\n\nsection.download .badges .badge-link img {\n      height: 60px; }\n\n@media (min-width: 768px) {\n      section.download .badges .badge-link {\n        display: inline-block;\n        margin-bottom: 0; } }\n\n@media (min-width: 768px) {\n    section.download h2 {\n      font-size: 70px; } }\n\nsection.features .section-heading {\n  margin-bottom: 100px; }\n\nsection.features .section-heading h2 {\n    margin-top: 0; }\n\nsection.features .section-heading p {\n    margin-bottom: 0; }\n\nsection.features .device-container,\nsection.features .feature-item {\n  max-width: 325px;\n  margin: 0 auto; }\n\nsection.features .device-container {\n  margin-bottom: 100px; }\n\n@media (min-width: 992px) {\n    section.features .device-container {\n      margin-bottom: 0; } }\n\nsection.features .feature-item {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center; }\n\nsection.features .feature-item h3 {\n    font-size: 30px; }\n\nsection.features .feature-item i {\n    font-size: 80px;\n    display: block;\n    margin-bottom: 15px;\n    background: -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\n    background: linear-gradient(to left, #7b4397, #dc2430);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n\nsection.cta {\n  position: relative;\n  padding: 250px 0;\n  background-image: url(\"/assets/img/bg-cta.jpg\");\n  background-position: center;\n  background-size: cover; }\n\nsection.cta .cta-content {\n    position: relative;\n    z-index: 1; }\n\nsection.cta .cta-content h2 {\n      font-size: 50px;\n      max-width: 450px;\n      margin-top: 0;\n      margin-bottom: 25px;\n      color: white; }\n\n@media (min-width: 768px) {\n      section.cta .cta-content h2 {\n        font-size: 80px; } }\n\nsection.cta .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); }\n\nsection.contact {\n  text-align: center; }\n\nsection.contact h2 {\n    margin-top: 0;\n    margin-bottom: 25px; }\n\nsection.contact h2 i {\n      color: #dd4b39; }\n\nsection.contact ul.list-social {\n    margin-bottom: 0; }\n\nsection.contact ul.list-social li a {\n      font-size: 40px;\n      line-height: 80px;\n      display: block;\n      width: 80px;\n      height: 80px;\n      color: white;\n      border-radius: 100%; }\n\nsection.contact ul.list-social li.social-twitter a {\n      background-color: #1da1f2; }\n\nsection.contact ul.list-social li.social-twitter a:hover {\n        background-color: #0d95e8; }\n\nsection.contact ul.list-social li.social-github a {\n      background-color: #24292e; }\n\nsection.contact ul.list-social li.social-github a:hover {\n        background-color: #191c20; }\n\nsection.contact ul.list-social li.social-google-plus a {\n      background-color: #dd4b39; }\n\nsection.contact ul.list-social li.social-google-plus a:hover {\n        background-color: #d73925; }\n\nfooter {\n  padding: 25px 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #222222; }\n\nfooter p {\n    font-size: 12px;\n    margin: 0; }\n\nfooter ul {\n    margin-bottom: 0; }\n\nfooter ul li a {\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.3); }\n\nfooter ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {\n        text-decoration: none; }\n\n.bg-primary {\n  background: #fdcc52;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fdcc52), to(#fdc539));\n  background: linear-gradient(#fdcc52, #fdc539); }\n\n.text-primary {\n  color: #fdcc52; }\n\n.no-gutter > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.btn-outline {\n  color: white;\n  border: 1px solid;\n  border-color: white; }\n\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {\n    color: white;\n    border-color: #fdcc52;\n    background-color: #fdcc52; }\n\n.btn {\n  border-radius: 300px;\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  letter-spacing: 2px;\n  text-transform: uppercase; }\n\n.btn-xl {\n  font-size: 11px;\n  padding: 15px 45px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map