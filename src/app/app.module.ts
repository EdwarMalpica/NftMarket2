import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ChartExampleComponent } from './modules/graficas/chart-example/chart-example.component';
import { BodyComponent } from './modules/view/body/body.component';
import { PresentationComponent } from './modules/view/body/presentation/presentation/presentation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { NftIndividualComponent } from './modules/view/body/nft-individual/nft-individual.component';
import { MyAccountComponent } from './modules/view/body/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartExampleComponent,
    BodyComponent,
    PresentationComponent,
    NftIndividualComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ButtonModule,
    ChartModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
