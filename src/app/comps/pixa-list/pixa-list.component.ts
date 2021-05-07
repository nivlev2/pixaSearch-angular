import { Component, OnInit } from '@angular/core';
import { PixaServiceService } from '../../services/pixa-service.service';

@Component({
  selector: 'app-pixa-list',
  templateUrl: './pixa-list.component.html',
  styleUrls: ['./pixa-list.component.css']
})
export class PixaListComponent implements OnInit {
  imagesAr:any;
  constructor(private pixaSer:PixaServiceService) { }

  ngOnInit(): void {
    this.imagesAr = this.pixaSer.getImages()
    this.pixaSer.doApiImages("https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=yellow+flowers&image_type=photo&pretty=true")
  }

}
