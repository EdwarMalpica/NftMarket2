import { ModuleWithProviders, NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './modules/view/body/presentation/presentation/presentation.component';
import { AnalitycsComponent } from './modules/view/body/analitycs/analitycs.component';
import { MyAccountComponent } from './modules/view/body/my-account/my-account.component';

const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  { path: '', component: PresentationComponent },
  { path: 'analytics', component: AnalitycsComponent },
  { path: 'home/:dato', component: PresentationComponent },
  { path:  'account', component: MyAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);