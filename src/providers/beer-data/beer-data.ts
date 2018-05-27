import { Injectable } from '@angular/core';
import { ServiceProvider } from '../service/service'

/*
  Generated class for the BeerDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerDataProvider {

  constructor(private serviceProvider:ServiceProvider) {
    console.log('Hello BeerDataProvider Provider');
  }

  getBeerData(){
    return this.serviceProvider.getService();
  }
}
