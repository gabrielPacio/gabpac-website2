import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InstantComponent} from "./instant/instant.component";
import {InstantService} from "./instant/instant.service";
import {NewInstantPanelComponent} from "./instant/newInstantPanel/newInstantPanel.component";

@NgModule({
  declarations: [
    AppComponent,
    InstantComponent,
    NewInstantPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
