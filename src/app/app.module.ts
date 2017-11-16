import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerCommunicationService } from './server-communication.service'
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {AppRoutes} from './app.routes';
import {ContentManagerComponent} from './contentManager/content-manager.component';
import {StringPipe} from './pipes/string.pipe';
import {NavigationService} from './shared/navigation/navigation.service';
import {HeaderComponent} from './header/header.component';
import {ContentManagerService} from './contentManager/content-manager.service';

@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent,
        ContentManagerComponent,
        StringPipe,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutes
    ],
    providers: [
        ServerCommunicationService,
        NavigationService,
        ContentManagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
