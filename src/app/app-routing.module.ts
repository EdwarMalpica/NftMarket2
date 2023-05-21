import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './modules/view/body/presentation/presentation/presentation.component';
import { UserScanComponent } from './modules/view/body/user-scan/user-scan.component';

const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  { path: '', component: PresentationComponent },
  { path: 'home/:dato', component: PresentationComponent },
  { path: 'scan', component: UserScanComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
