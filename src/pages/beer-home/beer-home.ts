import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the BeerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beer-home',
  templateUrl: 'beer-home.html',
})
export class BeerHomePage {

  private beersList;
  private sortOrder="ASC";
  private beerSearchText;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get('beerData').then((res)=>{
      this.beersList=res;
    })
  }

  toggleSort(){
    if(this.sortOrder=="ASC"){
      this.sortOrder="DESC";
    }else{
      this.sortOrder="ASC";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeerHomePage');
  }



}
