webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutPage/aboutPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-content row simple-shadow border-radius\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <spinner *ngIf=\"isLoading\"></spinner>\r\n    <img class=\"img-self\" src=\"assets/images/profile.jpg\" class=\"border-radius\" width=\"700\">\r\n    <div #content></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/aboutPage/aboutPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_titleDescription_model__ = __webpack_require__("../../../../../src/app/category/titleDescription.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPageComponent = (function () {
    function AboutPageComponent(serverComm, headerService) {
        this.serverComm = serverComm;
        this.headerService = headerService;
        this.isLoading = true;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var titleDescription = new __WEBPACK_IMPORTED_MODULE_3__category_titleDescription_model__["a" /* TitleDescriptionModel */]();
        titleDescription.title = 'Autor';
        titleDescription.description = 'O autor, humildemente escrevendo sobre si mesmo';
        this.headerService.setTitle(titleDescription);
        this.serverComm.getAbout().subscribe(function (res) {
            _this.isLoading = false;
            _this.content.nativeElement.innerHTML = res.content['rendered'];
        });
    };
    return AboutPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AboutPageComponent.prototype, "content", void 0);
AboutPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-about-page',
        template: __webpack_require__("../../../../../src/app/aboutPage/aboutPage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__header_header_service__["a" /* HeaderService */]) === "function" && _c || Object])
], AboutPageComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/aboutPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n\r\n<div class=\"main\">\r\n    <blog-header [title]=\"'Textos'\"></blog-header>\r\n    <div class=\"main-content row\">\r\n        <router-outlet ></router-outlet>\r\n    </div>\r\n\r\n    <footer>\r\n        Copyright 2017 Gabriel Paciornik\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('%c Hello fellow programmer!\nI see you`ve got interested in checking out my codebase. This blog was created using the ol`good Word Press, as you`ve probably already guessed by the REST calls format. WP is reliable and easy to configure. I didn`t see too much point in going through all the trouble of rewriting it.\nThe front-end is Angular 2. Why, you`d ask. Isn`t it an overkill? Yes. Sure. But that`s my daily work tool, and it looked too much of a trouble to context-switch to some other framework. Also, it provides some nice tricks and a smooth programming environment that I enjoy very much playing with. If you`d like to take a look at the code, please, send me an email and mention that you`ve seen this tip here. Also, enjoy the blog`s content and drop me a line to say what do you think.', 'color: orange');
        console.log('%c @gabpac', 'color: orange');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_component_test_component_component__ = __webpack_require__("../../../../../src/app/test-component/test-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menus_main_menu_component__ = __webpack_require__("../../../../../src/app/menus/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sideNavigator_sideNavigator_component__ = __webpack_require__("../../../../../src/app/sideNavigator/sideNavigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menus_menuTooltip_menuTooltip_component__ = __webpack_require__("../../../../../src/app/menus/menuTooltip/menuTooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aboutPage_aboutPage_component__ = __webpack_require__("../../../../../src/app/aboutPage/aboutPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__post_navigationBetweenPosts_navigationBetweenPosts_component__ = __webpack_require__("../../../../../src/app/post/navigationBetweenPosts/navigationBetweenPosts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__post_comment_comment_component__ = __webpack_require__("../../../../../src/app/post/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__post_comment_commentsListing_component__ = __webpack_require__("../../../../../src/app/post/comment/commentsListing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__post_comment_commentCreate_component__ = __webpack_require__("../../../../../src/app/post/comment/commentCreate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__social_social_component__ = __webpack_require__("../../../../../src/app/social/social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angulartics2__ = __webpack_require__("../../../../angulartics2/angulartics2.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angulartics2_ga__ = __webpack_require__("../../../../angulartics2/ga/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__test_component_test_component_component__["a" /* TestComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_8__category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menus_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sideNavigator_sideNavigator_component__["a" /* SideNavigatorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__menus_menuTooltip_menuTooltip_component__["a" /* MenuTooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_16__aboutPage_aboutPage_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__post_navigationBetweenPosts_navigationBetweenPosts_component__["a" /* NavigationBetweenPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__post_comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__post_comment_commentsListing_component__["a" /* CommentsListingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__post_comment_commentCreate_component__["a" /* CommentCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shared_spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__social_social_component__["a" /* SocialComponent */],
            __WEBPACK_IMPORTED_MODULE_26__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* AppRoutes */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_27_angulartics2__["b" /* Angulartics2Module */].forRoot([__WEBPACK_IMPORTED_MODULE_28_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */]])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__server_communication_service__["a" /* ServerCommunicationService */], __WEBPACK_IMPORTED_MODULE_14__header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_19__category_category_service__["a" /* CategoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutPage_aboutPage_component__ = __webpack_require__("../../../../../src/app/aboutPage/aboutPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");






var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], data: { title: "Gabriel Paciornik - Início" } },
    { path: "post/:id", component: __WEBPACK_IMPORTED_MODULE_2__post_post_component__["a" /* PostComponent */], data: { title: "Gabriel Paciornik" } },
    { path: "category/:id", component: __WEBPACK_IMPORTED_MODULE_3__category_category_component__["a" /* CategoryComponent */], data: { title: "Gabriel Paciornik" } },
    { path: "autor", component: __WEBPACK_IMPORTED_MODULE_4__aboutPage_aboutPage_component__["a" /* AboutPageComponent */], data: { title: "Gabriel Paciornik" } },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */], data: { title: "Gabriel Paciornik" } },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<spinner *ngIf=\"isLoading\"></spinner>\r\n<blog-social-component></blog-social-component>\r\n<blog-side-navigator-component *ngIf=\"!isLoading\" [postList]=\"postLinksSide\"></blog-side-navigator-component>\r\n<div class=\"category-container\">\r\n    <div class=\"posts-container\" *ngFor=\"let post of posts\">\r\n        <blog-post-component [isInitializeMinified]=\"true\" [postModel]=\"post\"></blog-post-component>\r\n    </div>\r\n    <div class=\"after-posts \">\r\n        <button angulartics2On=\"click\"\r\n                angularticsEvent=\"CarregarMaisPostagens\"\r\n                angularticsCategory=\"{{ slug }}\"\r\n                [angularticsProperties]=\"{label: 'Init'}\"\r\n                (click)=\"onLoadMore()\">Mais postagens</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sideNavigator_sideNavigator_model__ = __webpack_require__("../../../../../src/app/sideNavigator/sideNavigator.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_animations_fadeInAnimation__ = __webpack_require__("../../../../../src/app/global/animations/fadeInAnimation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CategoryComponent = (function () {
    function CategoryComponent(serverComm, router, categoryService, headerService) {
        var _this = this;
        this.serverComm = serverComm;
        this.router = router;
        this.categoryService = categoryService;
        this.headerService = headerService;
        this.isLoading = true;
        this.postLinksSide = [];
        this.currentPage = 1;
        this.postPerListing = 10;
        this.state = 'startRender';
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"]; })
            .map(function () { return _this.router.routerState.root.children[0].params['value']['id']; })
            .subscribe(function (event) {
            _this.slug = event;
            _this.state = 'startRender';
            _this.loadCategoryPosts();
        });
    }
    CategoryComponent.prototype.loadCategoryPosts = function () {
        var _this = this;
        if (!this.router.routerState.root.children[0].snapshot.url[0] || this.router.routerState.root.children[0].snapshot.url[0].path !== 'category') {
            return;
        }
        this.categoryService.getCategoryByName(this.slug).subscribe(function (res) {
            _this.isLoading = false;
            _this.posts = res;
            _this.createSideLinks();
            _this.headerService.setTitle(_this.categoryService.getTitleBySlug(_this.slug));
            _this.categoryNumber = _this.categoryService.getIdByName(_this.slug);
        });
        window.scrollTo(0, 0);
    };
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.categoryNumber) {
            this.serverComm.getPostsByCategory(this.categoryNumber, 1, this.postPerListing).subscribe(function (res) {
                _this.posts = res;
            });
        }
    };
    CategoryComponent.prototype.ngOnChanges = function () {
        if (this.posts) {
            this.createSideLinks();
        }
        this.state = 'endRender';
    };
    CategoryComponent.prototype.onLoadMore = function () {
        var _this = this;
        this.currentPage++;
        if (this.categoryNumber) {
            this.serverComm.getPostsByCategory(this.categoryNumber, this.currentPage, this.postPerListing).subscribe(function (res) {
                _this.posts = _this.posts.concat(res);
                _this.createSideLinks();
            });
        }
    };
    CategoryComponent.prototype.createSideLinks = function () {
        this.postLinksSide = this.posts.map(function (post) {
            var ret = new __WEBPACK_IMPORTED_MODULE_4__sideNavigator_sideNavigator_model__["a" /* SideNavigatorModel */]();
            ret.title = post.title['rendered'];
            ret.linkName = post.slug;
            return ret;
        });
    };
    return CategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CategoryComponent.prototype, "categoryNumber", void 0);
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/category/category.component.html"),
        selector: 'blog-category-component',
        providers: [__WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */]],
        animations: [__WEBPACK_IMPORTED_MODULE_8__global_animations_fadeInAnimation__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__header_header_service__["a" /* HeaderService */]) === "function" && _d || Object])
], CategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/category.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_link_model__ = __webpack_require__("../../../../../src/app/global/link.model.ts");

var CategoryModel = (function () {
    function CategoryModel(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
        this._links = new __WEBPACK_IMPORTED_MODULE_0__global_link_model__["a" /* LinkModel */](value['_links']);
    }
    return CategoryModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/category.model.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__titleDescription_model__ = __webpack_require__("../../../../../src/app/category/titleDescription.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(serverComm) {
        this.serverComm = serverComm;
        this.categories = serverComm.getAllCategories();
    }
    CategoryService.prototype.getIdByName = function (name) {
        var ret = this.categories.filter(function (category) { return category.slug === name; })[0];
        return ret.id;
    };
    CategoryService.prototype.getTitleBySlug = function (slug) {
        var ret = new __WEBPACK_IMPORTED_MODULE_2__titleDescription_model__["a" /* TitleDescriptionModel */]();
        var category = this.categories.filter(function (category) { return category.slug === slug; })[0];
        ret.title = category.name;
        ret.description = category.description;
        return ret;
    };
    CategoryService.prototype.getTitleById = function (id) {
        var ret = new __WEBPACK_IMPORTED_MODULE_2__titleDescription_model__["a" /* TitleDescriptionModel */]();
        var category = this.categories.filter(function (cat) { return cat.id === id; })[0];
        ret.title = category.name;
        ret.description = category.description;
        return ret;
    };
    CategoryService.prototype.getCategoryByName = function (name, page) {
        if (page === void 0) { page = 1; }
        return this.serverComm.getPostsByCategory(this.getIdByName(name), page);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/category.service.js.map

/***/ }),

/***/ "../../../../../src/app/category/titleDescription.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleDescriptionModel; });
var TitleDescriptionModel = (function () {
    function TitleDescriptionModel() {
    }
    return TitleDescriptionModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/titleDescription.model.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact post-content border-radius simple-shadow\">\r\n    <div class=\"tline\">\r\n        <div class=\"tcolumn\">\r\n            gabpac@gmail.com\r\n        </div>\r\n        <div class=\"tcolumn\">\r\n            email:\r\n        </div>\r\n    </div>\r\n    <div class=\"tline\">\r\n        <div class=\"tcolumn\">\r\n            <a href=\"https://www.facebook.com/gabpac\" target=\"_blank\">https://www.facebook.com/gabpac</a>\r\n        </div>\r\n        <div class=\"tcolumn\">\r\n            facebook:\r\n        </div>\r\n    </div>\r\n    <div class=\"tline\">\r\n        <div class=\"tcolumn\">\r\n            <a href=\"https://www.twitter.com/gabpac/\" target=\"_blank\">https://www.twitter.com/gabpac</a>\r\n        </div>\r\n        <div class=\"tcolumn\">\r\n            twitter:\r\n        </div>\r\n    </div>\r\n    <div class=\"tline\">\r\n        <div class=\"tcolumn\">\r\n            <a href=\"https://www.linkedin.com/in/gabpac/\" target=\"_blank\">https://www.linkedin.com/in/gabpac</a>\r\n        </div>\r\n        <div class=\"tcolumn\">\r\n            linkedin:\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/animations/fadeInAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('startRender', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('endRender', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('startRender => endRender', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('3s'))
    /*transition(':enter',  [
        style({opacity: 0}),
        animate('.3s', style({opacity: 1}))
    ])*/
]);
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/fadeInAnimation.js.map

/***/ }),

/***/ "../../../../../src/app/global/link.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkModel; });
var LinkModel = (function () {
    function LinkModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return LinkModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/link.model.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SITE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var SITE_URL = 'http://www.gabpac.com/wp-json/wp/v2/';
var CATEGORIES = [{ "id": 8, "count": 0, "description": "As incr\u00edveis aventuras de Arcimboldo, o dono do Brasil", "link": "http:\/\/gabpac.com\/category\/arcimboldo\/", "name": "Arcimboldo", "slug": "arcimboldo", "taxonomy": "category", "parent": 0, "meta": [], "_links": { "self": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories\/8" }], "collection": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/posts?categories=8" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 6, "count": 8, "description": "An\u00e1lises pol\u00edticas e ensaios sobre Israel e o Oriente M\u00e9dio.", "link": "http:\/\/gabpac.com\/category\/desoriente\/", "name": "DesOriente", "slug": "desoriente", "taxonomy": "category", "parent": 0, "meta": [], "_links": { "self": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories\/6" }], "collection": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/posts?categories=6" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 5, "count": 7, "description": "Pequenas hist\u00f3rias no dia-a-dia de Israel", "link": "http:\/\/gabpac.com\/category\/microhistorinhas\/", "name": "Microhistorinhas", "slug": "microhistorinhas", "taxonomy": "category", "parent": 0, "meta": [], "_links": { "self": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories\/5" }], "collection": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/posts?categories=5" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 7, "count": 0, "description": "Humilde autor escrevendo sobre si mesmo.", "link": "http:\/\/gabpac.com\/category\/autor\/", "name": "Sobre o Autor", "slug": "autor", "taxonomy": "category", "parent": 0, "meta": [], "_links": { "self": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories\/7" }], "collection": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/posts?categories=7" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }, { "id": 1, "count": 1, "description": "", "link": "http:\/\/gabpac.com\/category\/uncategorized\/", "name": "Uncategorized", "slug": "uncategorized", "taxonomy": "category", "parent": 0, "meta": [], "_links": { "self": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories\/1" }], "collection": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/categories" }], "about": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/taxonomies\/category" }], "wp:post_type": [{ "href": "http:\/\/gabpac.com\/wp-json\/wp\/v2\/posts?categories=1" }], "curies": [{ "name": "wp", "href": "https:\/\/api.w.org\/{rel}", "templated": true }] } }];
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/globals.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"simple-shadow\">\r\n    <h1 [(ngClass)]=\"titleState\">Isto não é um Blog - {{title}}</h1>\r\n    <h2 [(ngClass)]=\"subtitleState\">{{subtitle}}</h2>\r\n    <blog-main-menu-component></blog-main-menu-component>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(headerService) {
        var _this = this;
        this.headerService = headerService;
        this.subtitle = '';
        this.titleState = 'done'; // done, entering, switching, outing
        this.subtitleState = 'done'; // done, entering, switching, outing
        this.headerService.titleChange.subscribe(function (res) {
            setTimeout(function () {
                _this.setSubtitle(res.description);
            }, 400);
            _this.setTitle(res.title);
        });
    }
    HeaderComponent.prototype.setTitle = function (title) {
        var _this = this;
        this.titleState = 'outing';
        setTimeout(function () {
            _this.title = title;
            _this.titleState = 'done';
        }, 1000);
    };
    HeaderComponent.prototype.setSubtitle = function (subtitle) {
        var _this = this;
        this.subtitleState = 'outing';
        setTimeout(function () {
            _this.subtitle = subtitle;
            _this.subtitleState = 'done';
        }, 1000);
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "subtitle", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_service__["a" /* HeaderService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderService = (function () {
    function HeaderService() {
        this.titleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderService.prototype.setTitle = function (titleDescription) {
        this.titleChange.emit(titleDescription);
    };
    return HeaderService;
}());
HeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HeaderService);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/header.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <blog-social-component></blog-social-component>\r\n    <div class=\"home-page main-content row\">\r\n        <div class=\"side-navigator simple-shadow border-radius\">\r\n            <h4>A Gazeta do Vale informa:</h4>\r\n            <p><strong>Todos os Súditos do Barão de Itaguarebatiba</strong> na fase final de edição.</p>\r\n            <p>Aguardem!</p>\r\n            <hr>\r\n            <p>Pesquisa para o <strong>Melhor Livro de Auto Ajuda do Mundo</strong> vai bem divertida. Obrigado Bertrand Russel, Lao Tzu e Paulo Coelho.</p>\r\n        </div>\r\n        <h3 class=\"home-title\">Últimas postagens</h3>\r\n        <ng-container *ngFor=\"let post of lastPosts\">\r\n            <blog-post-component [isInitializeMinified]=\"true\" [postModel]=\"post\"></blog-post-component>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(serverComm) {
        this.serverComm = serverComm;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverComm.getAllPosts(1, 3).subscribe(function (res) {
            _this.lastPosts = res;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menus/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu u-pull-right\">\r\n    <ul>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[0]\"></blog-menu-tooltip><a routerLink=\"/\" routerLinkActive=\"active-link\">Início</a></li>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[1]\"></blog-menu-tooltip><a routerLink=\"autor\" routerLinkActive=\"active-link\">Sobre o Autor</a></li>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[2]\"></blog-menu-tooltip><a routerLink=\"category/arcimboldo\" routerLinkActive=\"active-link\">Arcimboldo</a></li>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[3]\"></blog-menu-tooltip><a routerLink=\"category/desoriente\" routerLinkActive=\"active-link\">Desoriente</a></li>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[4]\"></blog-menu-tooltip><a routerLink=\"category/microhistorinhas\" routerLinkActive=\"active-link\">Microhistorinhas</a></li>\r\n        <li><blog-menu-tooltip [text]=\"tooltips[5]\"></blog-menu-tooltip><a routerLink=\"contact\" routerLinkActive=\"active-link\">Contato</a></li>\r\n    </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/menus/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = (function () {
    function MainMenuComponent(serverComm) {
        this.serverComm = serverComm;
        this.tooltips = [];
        this.subtitle = '';
        this.tooltips[0] = 'Página inicial';
        this.tooltips[1] = 'O autor humildemente escreve sobre si mesmo';
        this.tooltips[2] = serverComm.getAllCategories().filter(function (cat) { return cat.slug === 'arcimboldo'; })[0].description;
        this.tooltips[3] = serverComm.getAllCategories().filter(function (cat) { return cat.slug === 'desoriente'; })[0].description;
        this.tooltips[4] = serverComm.getAllCategories().filter(function (cat) { return cat.slug === 'microhistorinhas'; })[0].description;
        this.tooltips[5] = 'Contacte o autor';
    }
    return MainMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainMenuComponent.prototype, "subtitle", void 0);
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-main-menu-component',
        template: __webpack_require__("../../../../../src/app/menus/main-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object])
], MainMenuComponent);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menus/menuTooltip/menuTooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"menu-tooltip border-radius\">\r\n    <p>{{text}}</p>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/menus/menuTooltip/menuTooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuTooltipComponent = (function () {
    function MenuTooltipComponent() {
        this.text = '';
    }
    return MenuTooltipComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MenuTooltipComponent.prototype, "text", void 0);
MenuTooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-menu-tooltip',
        template: __webpack_require__("../../../../../src/app/menus/menuTooltip/menuTooltip.component.html")
    }),
    __metadata("design:paramtypes", [])
], MenuTooltipComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/menuTooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Nome: <strong>{{comment.author_name}}</strong></h3>\r\n<h3>Website: <strong><a href=\"{{comment.author_url}}\" target=\"_blank\">{{comment.author_url}}</a></strong></h3>\r\n<h3>Data: <strong>{{comment.date | date:'medium'}}</strong></h3>\r\n<div #commentContent class=\"comment-content border-radius\"></div>\r\n<button (click)=\"respostaModal.open()\">Responder a esse comentário</button>\r\n<modal #respostaModal title=\"Responder\" cancelButtonLabel=\"Fechar\" modalClass=\"modal-lg\">\r\n    <modal-content>\r\n        <blog-comment-create [parentId]=\"comment.id\" [postID]=\"comment.post\"></blog-comment-create>\r\n    </modal-content>\r\n</modal>\r\n<blog-comments-listing [level]=\"level\" [parentNumber]=\"comment.id\" [allComments]=\"comment?.children\"></blog-comments-listing>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/post/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_model__ = __webpack_require__("../../../../../src/app/post/comment/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commentCreate_component__ = __webpack_require__("../../../../../src/app/post/comment/commentCreate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = (function () {
    function CommentComponent(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.level = 0;
    }
    CommentComponent.prototype.ngOnChanges = function () {
        this.commentContent.nativeElement.innerHTML = this.comment.content['rendered'];
    };
    return CommentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_model__["a" /* CommentModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_model__["a" /* CommentModel */]) === "function" && _a || Object)
], CommentComponent.prototype, "comment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "level", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('commentContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], CommentComponent.prototype, "commentContent", void 0);
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/post/comment/comment.component.html"),
        selector: 'blog-comment',
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__commentCreate_component__["a" /* CommentCreateComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], CommentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/comment/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_link_model__ = __webpack_require__("../../../../../src/app/global/link.model.ts");

var CommentModel = (function () {
    function CommentModel(values) {
        if (values === void 0) { values = {}; }
        this.children = [];
        Object.assign(this, values);
        this._links = new __WEBPACK_IMPORTED_MODULE_0__global_link_model__["a" /* LinkModel */](values['_links']);
    }
    return CommentModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/post/comment/commentCreate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-create border-radius\">\r\n    <h4>Escreva seu comentário:</h4>\r\n    <form #commentForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div>\r\n            <label for=\"author_name\">Autor</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"author_name\" required minlength=\"4\" maxlength=\"30\" [(ngModel)]=\"model.author_name\" name=\"author_name\" #author_name=\"ngModel\">\r\n            <div *ngIf=\"author_name.errors && (author_name.dirty || author_name.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!author_name.errors.required\">\r\n                    Autor é campo obrigatório\r\n                </div>\r\n                <div [hidden]=\"!author_name.errors.minlength\">\r\n                    Autor deve ter pelo menos 4 caracteres\r\n                </div>\r\n                <div [hidden]=\"!author_name.errors.maxlength\">\r\n                    Autor pode ter no máximo 30 caracteres\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <label for=\"author_email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"author_email\" required pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-‌​9-]+)+.+[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\" [(ngModel)]=\"model.author_email\" name=\"author_email\" #author_email=\"ngModel\">\r\n            <div *ngIf=\"author_email.errors && (author_email.dirty || author_email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!author_email.errors.required\">\r\n                    Email é campo obrigatório - Seu email não será revelado a outros usuários.\r\n                </div>\r\n                <div [hidden]=\"!author_email.errors.pattern\">\r\n                    Email inválido\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <label for=\"author_url\">URL</label>\r\n            <input type=\"url\" class=\"form-control\" id=\"author_url\" pattern=\"https?://.+\" [(ngModel)]=\"model.author_url\" name=\"url\" #author_url=\"ngModel\">\r\n            <div *ngIf=\"author_url.errors && (author_url.dirty || author_url.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!author_url.errors.pattern\">\r\n                    URL inválido\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <label for=\"content\">Seu comentário</label>\r\n            <textarea cols=\"50\" type=\"text\" class=\"form-control\" id=\"content\" required [(ngModel)]=\"model.content\" name=\"content\" #content=\"ngModel\"></textarea>\r\n            <div *ngIf=\"content.errors && (content.dirty || content.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!content.errors.required\">\r\n                    Não deixe o comentário em branco.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!commentForm.form.valid\">Enviar</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/comment/commentCreate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commentCreate_model__ = __webpack_require__("../../../../../src/app/post/comment/commentCreate.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentCreateComponent = (function () {
    function CommentCreateComponent(serverComm) {
        var _this = this;
        this.serverComm = serverComm;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__commentCreate_model__["a" /* CommentCreateModel */]();
        this.model.parent = this.parentId;
        this.serverComm.getUserIP().subscribe(function (res) { return _this.model.author_ip = res; });
        this.model.author_user_agent = window.navigator.userAgent;
        this.model.date = new Date();
        this.model.post = this.postID;
    }
    CommentCreateComponent.prototype.onSubmit = function () {
        console.log('GABPAC ----------------teste');
        this.serverComm.postPostComment(this.model).subscribe(function (res) {
            console.log('RES', res);
        });
    };
    return CommentCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CommentCreateComponent.prototype, "parentId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CommentCreateComponent.prototype, "postID", void 0);
CommentCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/post/comment/commentCreate.component.html"),
        selector: 'blog-comment-create'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object])
], CommentCreateComponent);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/commentCreate.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/comment/commentCreate.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentCreateModel; });
var CommentCreateModel = (function () {
    function CommentCreateModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return CommentCreateModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/commentCreate.model.js.map

/***/ }),

/***/ "../../../../../src/app/post/comment/commentsListing.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let comment of allComments\">\r\n    <div style=\"margin-left: 4rem;\" *ngIf=\"comment.parent == parentNumber\" class=\"comment\" [ngClass]=\"{'leveled': level > 0, 'comment': true}\">\r\n        <blog-comment [level]=\"level+1\" [comment]=\"comment\"></blog-comment>\r\n    </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/post/comment/commentsListing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsListingComponent = (function () {
    function CommentsListingComponent() {
        this.parentNumber = 0;
        this.level = 0;
    }
    CommentsListingComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.allComments) {
            return;
        }
        this.allComments.forEach(function (comment) {
            if (comment.parent !== _this.parentNumber) {
                _this.getCommentById(comment.parent).children.push(comment);
            }
        });
    };
    CommentsListingComponent.prototype.getCommentById = function (id) {
        return this.allComments.filter(function (comment) { return comment.id === id; })[0];
    };
    return CommentsListingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CommentsListingComponent.prototype, "allComments", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CommentsListingComponent.prototype, "parentNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CommentsListingComponent.prototype, "level", void 0);
CommentsListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/post/comment/commentsListing.component.html"),
        selector: 'blog-comments-listing'
    }),
    __metadata("design:paramtypes", [])
], CommentsListingComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/commentsListing.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/navigationBetweenPosts/navigationBetweenPosts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBetweenPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_model__ = __webpack_require__("../../../../../src/app/post/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationBetweenPostsComponent = (function () {
    function NavigationBetweenPostsComponent(serverComm) {
        this.serverComm = serverComm;
    }
    NavigationBetweenPostsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.post) {
            return;
        }
        this.serverComm.getPostNext(this.post.date, this.post.categories[0]).subscribe(function (res) {
            _this.nextPost = res;
        });
        this.serverComm.getPostPrevious(this.post.date, this.post.categories[0]).subscribe(function (res) {
            _this.previousPost = res;
        });
    };
    return NavigationBetweenPostsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__post_model__["a" /* PostModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_model__["a" /* PostModel */]) === "function" && _a || Object)
], NavigationBetweenPostsComponent.prototype, "post", void 0);
NavigationBetweenPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/post/navigationBetweenPosts/navigatorBetweenPosts.component.html"),
        selector: 'blog-navigator-between-posts'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _b || Object])
], NavigationBetweenPostsComponent);

var _a, _b;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/navigationBetweenPosts.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/navigationBetweenPosts/navigatorBetweenPosts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigator-between-posts\">\r\n    <a class=\"button\" *ngIf=\"previousPost\" href=\"post/{{previousPost.slug}}\">Postagem anterior</a>\r\n    <a class=\"button u-pull-right\" *ngIf=\"nextPost\" href=\"post/{{nextPost.slug}}\">Próxima postagem</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-content row simple-shadow border-radius\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <spinner *ngIf=\"isLoading\"></spinner>\r\n    <h2 id=\"{{postModel.slug}}\" *ngIf=\"postModel\"><a routerLink=\"/post/{{postModel.slug}}\" routerLinkActive=\"active-link\">{{postModel.title[\"rendered\"]}}</a></h2>\r\n    <div [ngClass]=\"{'minimized': isMinified, 'text-container': true}\" #content></div>\r\n    <button angulartics2On=\"click\" angularticsEvent=\"Comentarios\" angularticsCategory=\"{{ postModel.title }}\" [angularticsProperties]=\"{label: 'Init'}\" *ngIf=\"!isMinified\" (click)=\"commentsModal.open()\">Comentários</button>\r\n    <modal #commentsModal title=\"Comentários\" cancelButtonLabel=\"Fechar\" modalClass=\"modal-lg\" (onOpen)=\"onModalOpen($event)\">\r\n        <modal-content>\r\n            <div class=\"empty-comments\" *ngIf=\"!comments || comments.length === 0; else elseblock\">\r\n                Não há comentários. Seja o primeiro a comentar.\r\n            </div>\r\n            <ng-template #elseblock>\r\n                <blog-comments-listing [allComments]=\"comments\"></blog-comments-listing>\r\n            </ng-template>\r\n            <button (click)=\"respostaModal.open()\">Dê o seu pitaco!</button>\r\n        </modal-content>\r\n    </modal>\r\n    <modal #respostaModal title=\"Comentar\" cancelButtonLabel=\"Fechar\" modalClass=\"modal-lg\" (onOpen)=\"onModalOpen($event)\">\r\n        <modal-content>\r\n            <blog-comment-create [parentId]=\"0\" [postID]=\"postModel.id\"></blog-comment-create>\r\n        </modal-content>\r\n    </modal>\r\n    <blog-navigator-between-posts *ngIf=\"!isInitializeMinified\" [post]=\"postModel\" ></blog-navigator-between-posts>\r\n    <div *ngIf=\"isMinified\" class=\"shader\"></div>\r\n    <button angulartics2On=\"click\" angularticsEvent=\"LerMais\" angularticsCategory=\"{{ postModel.title }}\" [angularticsProperties]=\"{label: 'Init'}\" *ngIf=\"isMinified\" (click)=\"isMinified = false\" role=\"button\" class=\"maximize-button\">Ler Mais</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* ------------------ Colors -----------------*/\n/* ------------------- Used Colors ------------*/\n/* ------------------- Fonts ----------------*/\n/*$font_reading: 'Raleway', sans-serif;*/\n/* ------------------ Mixins ----------------*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@font-face {\n  font-family: ElizabethLight;\n  src: url(/assets/fonts/elizabethserif-light-webfont.woff2); }\n\n@font-face {\n  font-family: ElizabethLightItalic;\n  src: url(/assets/fonts/elizabethserif-lightitalic-webfont.woff2); }\n\n/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n\n.column, .columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; } }\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column, .columns {\n    margin-left: 4%; }\n  .column:first-child, .columns:first-child {\n    margin-left: 0; }\n  .one.column,\n  .one.columns {\n    width: 4.66666666667%; }\n  .two.columns {\n    width: 13.3333333333%; }\n  .three.columns {\n    width: 22%; }\n  .four.columns {\n    width: 30.6666666667%; }\n  .five.columns {\n    width: 39.3333333333%; }\n  .six.columns {\n    width: 48%; }\n  .seven.columns {\n    width: 56.6666666667%; }\n  .eight.columns {\n    width: 65.3333333333%; }\n  .nine.columns {\n    width: 74.0%; }\n  .ten.columns {\n    width: 82.6666666667%; }\n  .eleven.columns {\n    width: 91.3333333333%; }\n  .twelve.columns {\n    width: 100%;\n    margin-left: 0; }\n  .one-third.column {\n    width: 30.6666666667%; }\n  .two-thirds.column {\n    width: 65.3333333333%; }\n  .one-half.column {\n    width: 48%; }\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns {\n    margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns {\n    margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns {\n    margin-left: 26%; }\n  .offset-by-four.column,\n  .offset-by-four.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns {\n    margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns {\n    margin-left: 52%; }\n  .offset-by-seven.column,\n  .offset-by-seven.columns {\n    margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns {\n    margin-left: 78.0%; }\n  .offset-by-ten.column,\n  .offset-by-ten.columns {\n    margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns {\n    margin-left: 95.3333333333%; }\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns {\n    margin-left: 52%; } }\n\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.5em;\n  /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #4b4748; }\n\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-weight: 300; }\n\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -.1rem; }\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -.1rem; }\n\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -.1rem; }\n\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -.08rem; }\n\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -.05rem; }\n\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem; }\n  h2 {\n    font-size: 4.2rem; }\n  h3 {\n    font-size: 3.6rem; }\n  h4 {\n    font-size: 3.0rem; }\n  h5 {\n    font-size: 2.4rem; }\n  h6 {\n    font-size: 1.5rem; } }\n\np {\n  margin-top: 0; }\n\nstrong {\n  font-weight: bold; }\n\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #a53731; }\n\na:hover {\n  color: #561d1a; }\n\n/* Buttons\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button, button, input[type=\"submit\"], input[type=\"reset\"], input[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n/* Forms\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\n\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nfieldset {\n  padding: 0;\n  border-width: 0; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\n\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: none; }\n\nol {\n  list-style: decimal inside; }\n\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\n\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\n\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\n\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\n\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\n\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\n\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.u-pull-right {\n  float: right; }\n\n.u-pull-left {\n  float: left; }\n\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\n/* Larger than mobile */\n/* Larger than phablet (also point when grid becomes active) */\n/* Larger than tablet */\n/* Larger than desktop */\n/* Larger than Desktop HD */\n/* Bootstraps Modal\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #ffffff;\n  border: 1px solid #999999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000000; }\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.42857143px; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0; }\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px; }\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n.clickable {\n  cursor: pointer; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.clearfix:before,\n.clearfix:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after,\n.modal-footer:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n/*--------------------- Main -----------------------*/\n.main {\n  background-image: -owg-linear-gradient(175deg, white, whitesmoke);\n  background-image: linear-gradient(175deg, white, whitesmoke); }\n  .main header {\n    background-image: -owg-linear-gradient(175deg, #e3a4a0, #da8681);\n    background-image: linear-gradient(175deg, #e3a4a0, #da8681);\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1vw 1vw 0.5vw 1vw; }\n    @media (min-width: 769px) {\n      .main header {\n        padding: 2rem 2rem 1rem 5rem; } }\n    .main header h1 {\n      font-size: calc(1.375em + 1.6vw);\n      font-family: \"Rubik\", sans-serif;\n      letter-spacing: 0.15rem; }\n      .main header h1.done {\n        color: rgba(240, 255, 255, 0.8);\n        text-shadow: 1px 2px 3px #de9591, 0 0 0 #000, 1px 2px 3px #de9591;\n        transition: all 1s ease-in-out; }\n      .main header h1.outing {\n        color: #de9591;\n        text-shadow: 0 0 0 #de9591, 0 0 0 #de9591, 0 0 0 #de9591;\n        transition: all 1s ease-in-out; }\n    .main header h2 {\n      font-size: calc(0.7em + 0.8vw);\n      font-weight: 600;\n      float: left;\n      margin: 0.5rem 0; }\n      .main header h2.done {\n        color: rgba(240, 255, 255, 0.8);\n        text-shadow: 1px 1px 1px #de9591, 0 0 0 #000, 1px 1px 1px #de9591;\n        transition: all 1s ease-in-out; }\n      .main header h2.outing {\n        color: #de9591;\n        text-shadow: 0 0 0 #de9591, 0 0 0 #de9591, 0 0 0 #de9591;\n        transition: all 1s ease-in-out; }\n\n.main-content {\n  margin-top: 16.6rem; }\n\nnav.main-menu li {\n  float: left;\n  padding: 0.2rem 1.2rem;\n  font-size: 1.9rem;\n  position: relative; }\n  @media (max-width: 769px) {\n    nav.main-menu li {\n      font-size: calc(1em + 1vw);\n      padding: .1vw .6vh; } }\n  nav.main-menu li .menu-tooltip {\n    font-size: 1.2rem;\n    padding: .6rem;\n    color: #7e2a25;\n    background-image: -owg-linear-gradient(175deg, #f7eac4, #f3dea0);\n    background-image: linear-gradient(175deg, #f7eac4, #f3dea0);\n    position: absolute;\n    z-index: 50;\n    text-align: center;\n    bottom: 3rem;\n    min-width: 10rem;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n    box-shadow: 3px 3px 12px 1px rgba(0, 0, 0, 0.3); }\n    nav.main-menu li .menu-tooltip p {\n      margin: 0;\n      line-height: 1.1rem; }\n      @media (min-width: 769px) {\n        nav.main-menu li .menu-tooltip p {\n          line-height: 0.9vh; } }\n  nav.main-menu li:hover .menu-tooltip {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n    opacity: 0.8; }\n  nav.main-menu li a {\n    color: #7e2a25;\n    text-decoration: none; }\n\n.posts-container:first-child {\n  margin-top: 16rem; }\n\n.post-content, .after-posts {\n  margin: 7rem;\n  padding: 7rem;\n  background-color: #eef0f0;\n  max-width: 800px;\n  font-family: \"ElizabethLight\", sans-serif;\n  box-sizing: border-box; }\n  @media (min-width: 1400px) {\n    .post-content, .after-posts {\n      margin: 7rem auto; } }\n  @media (max-width: 1230px) {\n    .post-content, .after-posts {\n      margin: 7rem auto; } }\n  .post-content h2, .after-posts h2 {\n    margin-bottom: 2rem; }\n    .post-content h2 a, .after-posts h2 a {\n      color: #b89127;\n      background-color: #f5eacc;\n      font-family: \"Roboto Slab\", serif;\n      text-decoration: none;\n      font-size: calc(.75em + .8vw); }\n      .post-content h2 a:hover, .after-posts h2 a:hover {\n        text-decoration: solid; }\n  .post-content p, .post-content li, .after-posts p, .after-posts li {\n    margin-bottom: 1rem;\n    font-size: 1.5rem; }\n  .post-content li, .after-posts li {\n    list-style-type: square; }\n  .post-content .minimized, .after-posts .minimized {\n    height: 500px;\n    overflow: hidden; }\n  .post-content .shader, .after-posts .shader {\n    display: block;\n    width: 100%;\n    height: 4rem;\n    position: relative;\n    z-index: 1;\n    top: -4rem;\n    background-image: -owg-linear-gradient(rgba(238, 240, 240, 0), #eef0f0);\n    background-image: linear-gradient(rgba(238, 240, 240, 0), #eef0f0); }\n  .post-content .navigator-between-posts, .after-posts .navigator-between-posts {\n    padding-top: 3rem; }\n\n.side-navigator, .social-links {\n  /* Larger than tablet */\n  width: 200px;\n  position: fixed;\n  z-index: 5;\n  right: 5rem;\n  background-image: -owg-linear-gradient(175deg, #f9fafa, #e2e7e7);\n  background-image: linear-gradient(175deg, #f9fafa, #e2e7e7);\n  padding: 2rem; }\n  @media (max-width: 1230px) {\n    .side-navigator, .social-links {\n      display: none; } }\n\n.side-navigator {\n  bottom: 50px;\n  max-height: 540px;\n  overflow: auto;\n  top: 36rem; }\n  .side-navigator li {\n    padding-bottom: 1rem; }\n  .side-navigator a {\n    text-decoration: none;\n    color: #a53731;\n    font-weight: 600;\n    cursor: pointer; }\n    .side-navigator a:hover {\n      color: #561d1a; }\n  .side-navigator .selected {\n    color: #2f100e;\n    font-weight: 900; }\n\n.social-links {\n  top: 24rem; }\n  .social-links ul {\n    margin-bottom: 0; }\n  .social-links li {\n    float: left; }\n    .social-links li:not(:first-child) {\n      margin-left: 10px; }\n\n.simple-shadow {\n  box-shadow: 1px 2px 6px 2px rgba(126, 141, 148, 0.5); }\n\n.border-radius {\n  border-radius: 0.4rem; }\n\nfooter {\n  background-image: -owg-linear-gradient(175deg, #e3a4a0, #da8681);\n  background-image: linear-gradient(175deg, #e3a4a0, #da8681);\n  padding: 2rem;\n  color: #7e2a25; }\n\n.modal-lg button.close {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  line-height: inherit;\n  font-size: 3rem;\n  color: #7e2a25;\n  height: inherit;\n  float: right; }\n\n.modal-lg .modal-title {\n  font-family: \"Roboto Slab\", serif; }\n\n.modal-lg .comment {\n  border-top: 1px solid #b6bec2;\n  padding: 3rem 0; }\n  .modal-lg .comment h3 {\n    font-size: 1.5rem;\n    letter-spacing: inherit;\n    color: #7e2a25; }\n    .modal-lg .comment h3 strong {\n      font-weight: 900; }\n  .modal-lg .comment .comment-content {\n    padding: 2rem;\n    border: 1px solid #b6bec2;\n    margin: 2rem;\n    box-shadow: inset 1px 3px 10px 2px rgba(126, 141, 148, 0.5); }\n  .modal-lg .comment.leveled {\n    padding: 1rem 0;\n    border: inherit; }\n    .modal-lg .comment.leveled h3 {\n      font-size: 1.1rem; }\n    .modal-lg .comment.leveled .comment-content {\n      font-size: 1rem;\n      padding: 1rem;\n      border: 1px solid #b6bec2;\n      margin: 1rem;\n      box-shadow: inset 1px 3px 10px 2px rgba(126, 141, 148, 0.5); }\n\n.comment-create {\n  border: 1px solid #b6bec2;\n  padding: 2rem;\n  margin: 2rem;\n  background-color: #eef0f0; }\n  .comment-create .ng-valid[required], .comment-create .ng-valid.required {\n    border-left: 5px solid #42A948;\n    /* green */ }\n  .comment-create .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */ }\n  .comment-create .alert {\n    font-weight: 900;\n    color: #7e2a25;\n    font-size: 0.8rem;\n    position: relative;\n    top: -16px;\n    margin-left: 1rem; }\n  .comment-create input {\n    width: 50%; }\n    .comment-create input textarea {\n      width: 50%; }\n  .comment-create button[disabled]:hover {\n    background-color: #7e8d94;\n    color: white; }\n\n.img-self {\n  margin-bottom: 1rem; }\n\n.home-page .home-title {\n  text-align: center;\n  font-family: \"Roboto Slab\", serif;\n  color: #7e2a25; }\n\n.home-page .side-navigator h4 {\n  margin-bottom: 1.5rem;\n  font-family: \"Roboto Slab\", serif;\n  color: #7e2a25; }\n\n.contact {\n  font-family: \"Roboto Slab\", serif;\n  font-size: 2rem;\n  line-height: 2rem; }\n  .contact .tcolumn:first-child {\n    float: right; }\n  .contact .tline {\n    border-bottom: dotted #b6bec2 3px;\n    margin-bottom: 2rem; }\n\n.after-posts {\n  padding: 0;\n  background-color: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_model__ = __webpack_require__("../../../../../src/app/post/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(serverComm, route, categoryService, headerService) {
        this.serverComm = serverComm;
        this.route = route;
        this.categoryService = categoryService;
        this.headerService = headerService;
        this.isInitializeMinified = false;
        this.isLoading = true;
        if (this.route.params && this.route.params['value'] && this.route.params['value'].id) {
            this.slug = this.route.params['value'].id;
        }
    }
    PostComponent.prototype.init = function () {
        var _this = this;
        if (this.postModel) {
            this.setVars();
        }
        else {
            this.serverComm.getPostBySlug(this.slug).subscribe(function (res) {
                _this.postModel = res;
                _this.setVars();
            });
        }
        this.isMinified = this.isInitializeMinified;
    };
    PostComponent.prototype.ngOnInit = function () {
        this.init();
    };
    PostComponent.prototype.ngOnChanges = function (changes) {
        this.init();
    };
    PostComponent.prototype.setVars = function () {
        if (!this.postModel) {
            return;
        }
        if (!this.postModel.content) {
            return;
        }
        this.isLoading = false;
        this.headerService.setTitle(this.categoryService.getTitleById(this.postModel.categories[0]));
        this.postContent = this.postModel.content['rendered'];
        this.content.nativeElement.innerHTML = this.postContent;
    };
    PostComponent.prototype.onModalOpen = function (event) {
        var _this = this;
        this.serverComm.getPostComments(this.postModel.id).subscribe(function (res) {
            _this.comments = res;
        });
    };
    return PostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__post_model__["a" /* PostModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__post_model__["a" /* PostModel */]) === "function" && _a || Object)
], PostComponent.prototype, "postModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PostComponent.prototype, "isInitializeMinified", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], PostComponent.prototype, "content", void 0);
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        selector: 'blog-post-component',
        styles: [__webpack_require__("../../../../../src/app/post/post.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__category_category_service__["a" /* CategoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__header_header_service__["a" /* HeaderService */]) === "function" && _f || Object])
], PostComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/post.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_link_model__ = __webpack_require__("../../../../../src/app/global/link.model.ts");

var PostModel = (function () {
    function PostModel(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
        this._links = new __WEBPACK_IMPORTED_MODULE_0__global_link_model__["a" /* LinkModel */](values['_links']);
    }
    return PostModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/post.model.js.map

/***/ }),

/***/ "../../../../../src/app/server-communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerCommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_model__ = __webpack_require__("../../../../../src/app/post/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category_model__ = __webpack_require__("../../../../../src/app/category/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_comment_comment_model__ = __webpack_require__("../../../../../src/app/post/comment/comment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ServerCommunicationService = (function () {
    function ServerCommunicationService(http) {
        this.http = http;
    }
    ServerCommunicationService.prototype.getAllPosts = function (page, perPage) {
        if (page === void 0) { page = 1; }
        if (perPage === void 0) { perPage = 10; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts?page=' + page + '&per_page=' + perPage)
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); }); })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostsByCategory = function (category, page, perPage) {
        if (page === void 0) { page = 1; }
        if (perPage === void 0) { perPage = 10; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts?categories=' + category + '&page=' + page + '&per_page=' + perPage)
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); }); })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostByID = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts/' + id)
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](res.json()); })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostBySlug = function (slug) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts?slug=' + slug)
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); })[0]; })
            .catch(this.handleError);
    };
    /* Original function - changed to a static version since categories hardly change
    public getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get(globals.SITE_URL + 'categories')
      .map(res => res.json().map(element => new CategoryModel(element)))
      .catch(this.handleError);
    }
     */
    ServerCommunicationService.prototype.getAllCategories = function () {
        return __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* CATEGORIES */].map(function (element) { return new __WEBPACK_IMPORTED_MODULE_6__category_category_model__["a" /* CategoryModel */](element); });
    };
    ServerCommunicationService.prototype.getAbout = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'pages?id=63')
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); })[0]; })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostPrevious = function (currentPostDate, category) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts?before=' + currentPostDate + '&per_page=1&categories=' + category)
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); })[0]; })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostNext = function (currentPostDate, category) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'posts?after=' + currentPostDate + '&per_page=1&order=asc&categories=' + category)
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_4__post_post_model__["a" /* PostModel */](element); })[0]; })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.getPostComments = function (postId, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'comments?post=' + postId + '&order=asc')
            .map(function (res) { return res.json().map(function (element) { return new __WEBPACK_IMPORTED_MODULE_7__post_comment_comment_model__["a" /* CommentModel */](element); }); })
            .catch(this.handleError);
    };
    ServerCommunicationService.prototype.postPostComment = function (postValues) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__globals__["b" /* SITE_URL */] + 'comments', postValues)
            .map(function (res) {
            (function (res) { return res.json(); });
        });
    };
    ServerCommunicationService.prototype.getUserIP = function () {
        return this.http.get('http://api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
            .map(function (res) {
            var ipVar = res.text();
            var num = ipVar.indexOf(":");
            var num2 = ipVar.indexOf("\"});");
            ipVar = ipVar.slice(num + 2, num2);
            return ipVar;
        });
    };
    ServerCommunicationService.prototype.handleError = function (error) {
        console.log('An error have occurred - ', error);
        return error;
    };
    return ServerCommunicationService;
}());
ServerCommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ServerCommunicationService);

var _a;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/server-communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n    <div class=\"rect1\"></div>\r\n    <div class=\"rect2\"></div>\r\n    <div class=\"rect3\"></div>\r\n    <div class=\"rect4\"></div>\r\n    <div class=\"rect5\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ------------------ Colors -----------------*/\n/* ------------------- Used Colors ------------*/\n/* ------------------- Fonts ----------------*/\n/*$font_reading: 'Raleway', sans-serif;*/\n/* ------------------ Mixins ----------------*/\n.spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n  .spinner > div {\n    background-color: #c74942;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .spinner .rect2 {\n    background-color: #67a3ab;\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .spinner .rect3 {\n    background-color: #b89127;\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  .spinner .rect4 {\n    background-color: #f5e4b2;\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .spinner .rect5 {\n    background-color: #7e8d94;\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',
        template: __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/spinner/spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/sideNavigator/sideNavigator.component.html":
/***/ (function(module, exports) {

module.exports = "<div #linksList class=\"side-navigator simple-shadow border-radius\">\r\n    <ul>\r\n        <li *ngFor=\"let post of postList\"><a [ngClass]=\"{'selected': currentId === post.linkName}\" pageScroll [pageScrollOffset]=\"250\" [pageScrollDuration]=\"1000\" href=\"#{{post.linkName}}\">{{post.title}}</a></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sideNavigator/sideNavigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavigatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavigatorComponent = (function () {
    function SideNavigatorComponent(categoryService) {
        this.categoryService = categoryService;
        this.postsTopPositions = [];
        document.addEventListener('scroll', this.handleOnScroll.bind(this));
    }
    SideNavigatorComponent.prototype.ngAfterViewChecked = function () {
        if (!this.postsTopPositions.length) {
            this.setPostsHeight();
        }
    };
    SideNavigatorComponent.prototype.setPostsHeight = function () {
        this.posts = document.getElementsByClassName('post-content');
        this.postsTopPositions = Array.from(this.posts).map(function (element) {
            return element.getBoundingClientRect().top + window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        });
    };
    SideNavigatorComponent.prototype.handleOnScroll = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["debounce"](this.setPostsHeight, 100)();
        this.setPostsHeight();
        var position = (document.documentElement.scrollTop || document.body.scrollTop);
        if (!this.posts) {
            return;
        }
        var currentId;
        var arr = Array.from(this.posts).filter(function (element, key) {
            return _this.postsTopPositions[key] > position /*&& this.postsTopPositions[key + 1] < position*/;
        });
        if (arr && arr[0] && arr[0].getElementsByTagName('h2')) {
            var selected = this.elementRef.nativeElement.getElementsByClassName('selected')[0];
            if (selected) {
                selected.scrollIntoView();
            }
            var array = arr[0].getElementsByTagName('h2')[0];
            if (array) {
                currentId = array.id;
            }
            if (this.currentId !== currentId) {
                this.currentId = currentId;
            }
        }
        else {
            return;
        }
    };
    return SideNavigatorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SideNavigatorComponent.prototype, "postList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SideNavigatorComponent.prototype, "morePostsAfter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('linksList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SideNavigatorComponent.prototype, "elementRef", void 0);
SideNavigatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-side-navigator-component',
        template: __webpack_require__("../../../../../src/app/sideNavigator/sideNavigator.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_category_service__["a" /* CategoryService */]) === "function" && _b || Object])
], SideNavigatorComponent);

var _a, _b;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/sideNavigator.component.js.map

/***/ }),

/***/ "../../../../../src/app/sideNavigator/sideNavigator.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavigatorModel; });
var SideNavigatorModel = (function () {
    function SideNavigatorModel() {
    }
    return SideNavigatorModel;
}());

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/sideNavigator.model.js.map

/***/ }),

/***/ "../../../../../src/app/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"social-links simple-shadow border-radius\">\r\n    <ul>\r\n        <li>\r\n            <a angulartics2On=\"click\" angularticsEvent=\"SocialFacebook\" angularticsCategory=\"social\" [angularticsProperties]=\"{label: 'Init'}\" href=\"https://www.facebook.com/gabpac\" target=\"_blank\">\r\n                <img src=\"assets/images/fb-art.png\" width=\"60\"/>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a angulartics2On=\"click\" angularticsEvent=\"SocialTwitter\" angularticsCategory=\"social\" [angularticsProperties]=\"{label: 'Init'}\" href=\"https://twitter.com/gabpac\" target=\"_blank\">\r\n                <img src=\"assets/images/twitterlogo_1x.png\"  width=\"60\"/>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a angulartics2On=\"click\" angularticsEvent=\"SocialLinkedin\" angularticsCategory=\"social\" [angularticsProperties]=\"{label: 'Init'}\" href=\"https://twitter.com/gabpac\" target=\"_blank\">\r\n                <img src=\"assets/images/linkedin-logo-copy.png\" width=\"60\"/>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = (function () {
    function SocialComponent() {
    }
    return SocialComponent;
}());
SocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blog-social-component',
        template: __webpack_require__("../../../../../src/app/social/social.component.html")
    }),
    __metadata("design:paramtypes", [])
], SocialComponent);

//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/social.component.js.map

/***/ }),

/***/ "../../../../../src/app/test-component/test-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-component works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/test-component/test-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-component/test-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_communication_service__ = __webpack_require__("../../../../../src/app/server-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponentComponent = (function () {
    function TestComponentComponent(serverCommunication, route) {
        this.serverCommunication = serverCommunication;
        this.route = route;
    }
    TestComponentComponent.prototype.ngOnInit = function () {
        /*this.serverCommunication.getAllPostsArray().subscribe(res => {
          res.forEach(r => console.log( r.content['rendered']));
        });*/
        /*this.serverCommunication.getPostByID(51).subscribe(res => {
          console.log(res);
        });*/
        console.log('GABPAC ------route---->', this.route.params['value'].id);
    };
    return TestComponentComponent;
}());
TestComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test-component',
        template: __webpack_require__("../../../../../src/app/test-component/test-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/test-component/test-component.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_communication_service__["a" /* ServerCommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], TestComponentComponent);

var _a, _b;
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/test-component.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/sandbox/gabpac-client/gabpacwebsite/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map