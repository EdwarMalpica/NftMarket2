import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing.module';
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
import { UserScanComponent } from './modules/view/body/user-scan/user-scan.component';
import { TableModule } from 'primeng/table';
import { NftIndividualComponent } from './modules/view/body/nft-individual_previo/nft-individual.component';
import { MyAccountComponent } from './modules/view/body/my-account/my-account.component';
import { InfoNftComponent } from './modules/view/body/info-nft/info-nft.component';
import { AnalitycsComponent } from './modules/view/body/analitycs/analitycs.component';
import { GraphOneComponent } from './modules/view/body/analitycs/graph-one/graph-one.component';
import { GraphTwoComponent } from './modules/view/body/analitycs/graph-two/graph-two.component';
import { GraphThreeComponent } from './modules/view/body/analitycs/graph-three/graph-three.component';
import { GraphFourComponent } from './modules/view/body/analitycs/graph-four/graph-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartExampleComponent,
    BodyComponent,
    PresentationComponent,
    UserScanComponent
  ],
  imports: [
    BrowserModule,

    NftIndividualComponent,
    MyAccountComponent,
    InfoNftComponent,
    AnalitycsComponent,
    GraphOneComponent,
    GraphTwoComponent,
    GraphThreeComponent,
    GraphFourComponent
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    routing,
    ButtonModule,
    ChartModule,
    MatSidenavModule,
    MatIconModule,
    TableModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
