import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';



import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { BeerDataProvider } from '../providers/beer-data/beer-data';
import {SortPopoverPage} from '../pages/beer-home/beer-home';
import {ModelFilterPage} from '../pages/beer-home/beer-home';

@NgModule({
  declarations: [
    MyApp,
    SortPopoverPage,
    ModelFilterPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SortPopoverPage,
    ModelFilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    BeerDataProvider
  ]
})
export class AppModule {}
