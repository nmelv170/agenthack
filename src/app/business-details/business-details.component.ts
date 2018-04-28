import { Component, OnInit } from '@angular/core';
import { SelectedServiceService } from '../services/selected-business/selected-service.service';
import { BusinessInfo } from '../business-model/business-info';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {

  business: BusinessInfo;

  constructor(private selected: SelectedServiceService) { }

  ngOnInit() {
    this.business = this.selected.getBusiness();
  }

}
