import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class PixaServiceService {
  images_ar:any[] = [];
  constructor(private pixaSer:ApiServiceService) {

   }
   getImages():any {
    this.images_ar = this.pixaSer.doApiget("https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=yellow+flowers&image_type=photo&pretty=true");
    console.log(this.images_ar);
    
   }
}
