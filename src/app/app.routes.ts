import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {TestComponentComponent} from "./test-component/test-component.component";
import {CategoryComponent} from './category/category.component';
import {AboutPageComponent} from './aboutPage/aboutPage.component';


export const routes: Routes = [
    {path: "", component: HomeComponent, data: {title: "Gabriel Paciornik - Início"}},
    {path: "post/:id", component: PostComponent, data: {title: "Gabriel Paciornik"}},
    {path: "category/:id", component: CategoryComponent, data: {title: "Gabriel Paciornik"}},
    {path: "autor", component: AboutPageComponent, data: {title: "Gabriel Paciornik"}},

];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
