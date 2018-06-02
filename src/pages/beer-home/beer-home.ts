import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import _ from 'lodash';
import { PopoverController } from 'ionic-angular';


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
  private beerSearchText="";
  private beerTypes=[];
  private selectedBeerTypes=[];
  order: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private storage: Storage, private popOver:PopoverController, public modalCtrl:ModalController) {
    storage.get('beerData').then((res)=>{
      this.beersList=res;
      this.beerTypes=_.uniqBy(res, 'style');
      // this.beerTypes=_.map(this.beerTypes, 'style'); 
      this.beerTypes=_.sortBy(res, 'style');
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeerHomePage');
  }

  openSortFilter(event){
    let sortPopover=this.popOver.create(SortPopoverPage);
    sortPopover.present({
      ev:event
    }
    )
    sortPopover.onDidDismiss((returnVal)=>{
      if(returnVal.sortOrder && returnVal.sortOrder=="ASC"){
        this.order=1;
      }else if (returnVal.sortOrder && returnVal.sortOrder=="DESC"){
        this.order=-1;
      }
    });
  }

  chooseBeerTypes(){
    let beerTypeModal = this.modalCtrl.create(ModelFilterPage, { beerTypes: this.beerTypes });
    beerTypeModal.present();
    beerTypeModal.onDidDismiss((beerTypesUpdated)=>{
      this.selectedBeerTypes=beerTypesUpdated.beerTypesUpdated;
    })
  }

  

}

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="setSort('ASC')">Lowest Alcohol % first</button>
      <button ion-item (click)="setSort('DESC')">Highest Alcohol % first</button>
    </ion-list>
  `
})
export class SortPopoverPage {
  constructor(public viewCtrl: ViewController) {}


  setSort(val) {
    this.viewCtrl.dismiss({
      sortOrder: val
    });
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-buttons end>
        <button ion-button icon-only color="danger" (click)="closeModal()">
          <ion-icon name="ios-close-circle-outline"></ion-icon>
        </button>
      </ion-buttons>
      <ion-title>Beer Types</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list inset>
      <ion-item *ngFor="let beerType of beerTypes;index as typeIndex">
          <ion-label *ngIf="beerType.style==''"> N/A  </ion-label>
          <ion-label *ngIf="beerType.style!=''"> {{beerType.style}} </ion-label>
          <ion-checkbox [(ngModel)]="beerType.selected">
          </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class ModelFilterPage {

  beerTypes;
  constructor(params: NavParams, private viewCtrl:ViewController) {
    console.log('beerTypes', params.get('beerTypes'));
    this.beerTypes=params.get('beerTypes');
    this.beerTypes=_.sortedUniqBy(this.beerTypes,'style');
  }

  closeModal(){
    let selectedBeerTypes=_.filter(this.beerTypes, function(item){
      return item.selected == true;
    });
    this.viewCtrl.dismiss({
      beerTypesUpdated:_.map(selectedBeerTypes,'style')
    })
  }

}
