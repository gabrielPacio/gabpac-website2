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


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    PostComponent,
    CategoryComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
