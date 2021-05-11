import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import {sortBy} from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class PixaServiceService {
  images_ar:any[] = [];
  constructor(private apiSer:ApiServiceService) {

   }
   getImages():any {
     return this.images_ar;
   }

   doApiImages(_url:string):void {
    this.images_ar.splice(0,this.images_ar.length)
    this.apiSer.doApiget(_url).subscribe((data:any) => {
      this.images_ar.push(...data.hits)
      
    })
   }
   sortImages(keyS:any):any{
     let sortedArr = sortBy(this.images_ar,keyS)
     if(keyS === 'likes'){
      this.images_ar.splice(0,this.images_ar.length,...sortedArr.reverse())

     }else{
      this.images_ar.splice(0,this.images_ar.length,...sortedArr)
     }

    //  this.images_ar.push()
     
   }
}
