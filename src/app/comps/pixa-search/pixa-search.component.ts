import { Component, OnInit } from '@angular/core';
import { PixaServiceService } from '../../services/pixa-service.service';

@Component({
  selector: 'app-pixa-search',
  templateUrl: './pixa-search.component.html',
  styleUrls: ['./pixa-search.component.css']
})
export class PixaSearchComponent implements OnInit {
  inputSearch = ""
  sortKey = ''
  constructor(private pixaSer:PixaServiceService) { }

  ngOnInit(): void {
  }
  searchImages():void{
    this.pixaSer.doApiImages(`https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${this.inputSearch}&image_type=photo&pretty=true`)
  }
  sortImages():void{
    
    this.pixaSer.sortImages(this.sortKey)
  }

}
