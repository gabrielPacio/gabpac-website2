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


@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent,
        PostComponent,
        CategoryComponent,
        MainMenuComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes
    ],
    providers: [ServerCommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
