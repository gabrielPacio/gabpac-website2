import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerCommunicationService } from './server-communication.service'

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {PostComponent} from "./post/post.component";


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    PostComponent
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
