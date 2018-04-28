import { Component, OnInit } from '@angular/core';
import { SelectedServiceService } from '../services/selected-business/selected-service.service';
import { BusinessInfo } from '../business-model/business-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {

  business: BusinessInfo;

  constructor(private selected: SelectedServiceService,
              private router: Router) { }

  ngOnInit() {
    this.business = this.selected.getBusiness();
  }

  back() {
    this.router.navigate(['business-selection'], {
      queryParams: {
        'zipCode': this.selected.getPrevZip(),
        'businessType': this.selected.getPrevType()
      }
    })
  }
}
