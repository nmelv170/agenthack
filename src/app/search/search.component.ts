import { Component, OnInit } from '@angular/core';
import { SearchInfo } from './search-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  businessTypes = ['Hotel', 'Resturaunt', 'Retail'];

  searchInfo = new SearchInfo("", this.businessTypes[0]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchAndNav() {
    this.router.navigate(['business-selection'], 
                        { queryParams: {'zipCode': this.searchInfo.zipCode, 
                                        'businesTyupe':   this.searchInfo.businessType}})
  }
}
