import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerHomePage } from './beer-home';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BeerHomePage
  ],
  imports: [
    IonicPageModule.forChild(BeerHomePage),
    PipesModule
  ]
})
export class BeerHomePageModule {}
