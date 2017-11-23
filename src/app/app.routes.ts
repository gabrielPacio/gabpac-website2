import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentManagerComponent} from './contentManager/content-manager.component';

export const routes: Routes = [
    {path: "", component: ContentManagerComponent, data: {title: "Gabriel Paciornik"}},
    {path: ":blogArea", component: ContentManagerComponent, data: {title: "Gabriel Paciornik"}}
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
