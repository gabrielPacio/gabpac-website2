import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerCommunicationService } from './server-communication.service'
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

import {PostComponent} from "./post/post.component";
import {CategoryComponent} from './category/category.component';
import {MainMenuComponent} from './menus/main-menu.component';
import {AppRoutes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {SideNavigatorComponent} from "./sideNavigator/sideNavigator.component";
import {HeaderComponent} from "./header/header.component";
import {HeaderService} from "./header/header.service";
import {MenuTooltipComponent} from './menus/menuTooltip/menuTooltip.component';
import {AboutPageComponent} from './aboutPage/aboutPage.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {NavigationBetweenPostsComponent} from "./post/navigationBetweenPosts/navigationBetweenPosts.component";
import {CategoryService} from "./category/category.service";
import {ModalModule} from "ng2-modal";
import {CommentComponent} from './post/comment/comment.component';
import {CommentsListingComponent} from './post/comment/commentsListing.component';
import {CommentCreateComponent} from "./post/comment/commentCreate.component";
import {SpinnerComponent} from './shared/spinner/spinner.component';
import {SocialComponent} from './social/social.component';
import {ContactComponent} from './contact/contact.component';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent,
        PostComponent,
        CategoryComponent,
        MainMenuComponent,
        SideNavigatorComponent,
        HomeComponent,
        HeaderComponent,
        MenuTooltipComponent,
        AboutPageComponent,
        NavigationBetweenPostsComponent,
        CommentComponent,
        CommentsListingComponent,
        CommentCreateComponent,
        SpinnerComponent,
        SocialComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutes,
        Ng2PageScrollModule,
        ModalModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
    ],
    providers: [ServerCommunicationService, HeaderService, CategoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
