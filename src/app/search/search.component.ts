import { Component, OnInit } from '@angular/core';
import { SearchInfo } from './search-info';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  businessTypes = ['Hotel', 'Resturaunt', 'Retail'];

  searchInfo = new SearchInfo("", this.businessTypes[0]);

  constructor() { }

  ngOnInit() {
  }

}
