import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], params:{searchString,itemProperty} ) {
    if(!items) return [];
    if(!params.searchString) return items;
    var sortedArray=[];
    let searchRes=[];
    if(params.itemProperty=='style'){
      if(params.searchString.length==0){
        searchRes=items;
      }else{
        params.searchString.map((searchStr)=>{
          searchRes=searchRes.concat(items.filter( it => {
            return it[params.itemProperty].toLowerCase().includes(searchStr.toLowerCase());
          }));
        })
      }
      return searchRes;
    }else{
      params.searchString = params.searchString.toLowerCase();
      return items.filter( it => {
        return it[params.itemProperty].toLowerCase().includes(params.searchString);
      });
    }
  }
}
