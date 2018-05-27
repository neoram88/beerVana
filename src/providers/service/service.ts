import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare const webpackGlobalVars: any;


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  public static serviceEndPoint = webpackGlobalVars.SERVICE_ENDPOINT;

  constructor(public http: HttpClient) {
    console.log('Hello Service Provider');
  }

  getService(url?) : Observable<any> {
      let apiURL = ServiceProvider.serviceEndPoint;
      if(url){
        return this.http.get(apiURL+url);
      }
      return this.http.get(apiURL);
  }

}
