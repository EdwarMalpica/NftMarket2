import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './modules/view/body/presentation/presentation/presentation.component';
import { AnalitycsComponent } from './modules/view/body/analitycs/analitycs.component';
import { MyAccountComponent } from './modules/view/body/my-account/my-account.component';
import { UserScanComponent } from './modules/view/body/user-scan/user-scan.component';


const routes: Routes = [
  { path: 'home', component: PresentationComponent },
  { path: '', component: PresentationComponent },
  { path: 'scan', component: UserScanComponent },
  { path: 'analytics', component: AnalitycsComponent },
  { path: 'home/:dato', component: PresentationComponent },
  { path:  'account', component: MyAccountComponent },
  { path: 'account/:dato', component: MyAccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

