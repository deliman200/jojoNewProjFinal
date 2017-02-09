import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TodoComponent} from "./todo/todo.component";

const appRoutes: Routes = [
  {path: "", component: TodoComponent},
  {path: "login", component: LoginComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);