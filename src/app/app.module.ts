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


@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent,
        PostComponent,
        CategoryComponent,
        MainMenuComponent,
        SideNavigatorComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes
    ],
    providers: [ServerCommunicationService, HeaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
