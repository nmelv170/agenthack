import { Component, OnInit } from '@angular/core';
import { BusinessSearchService } from '../services/business-search/business-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessInfo } from '../business-model/business-info';
import { SelectedServiceService } from '../services/selected-business/selected-service.service';

@Component({
  selector: 'app-business-selection',
  templateUrl: './business-selection.component.html',
  styleUrls: ['./business-selection.component.css']
})
export class BusinessSelectionComponent implements OnInit {

  businesses = [];
  zip: string;
  type: string;

  constructor(private searchService: BusinessSearchService,
              private route: ActivatedRoute,
              private router: Router,
              private selected: SelectedServiceService) { }

  //TODO events instead of nesting
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.businesses = [];
      this.zip = params.get('zipCode');
      this.type = params.get('businessType');
      this.searchService.businessSearch(this.zip, this.type).subscribe((data) => {
        let businessList = data.Results.output1.value.Values;
        let businessIds = [];
        let businessProbs = [];
        for (let business in businessList) {
          businessIds.push(businessList[business]);
          //TODO: i know, cheeting for now
          businessProbs.push({"id": businessList[business][0], "prob": businessList[business][3]});
        }

        this.searchService.businessLookup(businessIds).subscribe(data => {
          let businessDataList = data.Results.output1.value.Values
          for(let business in businessDataList) {
            let b = businessDataList[business]
            let obj = businessProbs.find(o => o["id"] === b[0]);
            this.businesses.push(new BusinessInfo(b[0], b[1], b[4], b[5], b[6], b[7], b[2], 
                                                  b[8], b[9], b[10], b[11], b[12], b[13],
                                                  b[14], b[15], b[16], b[18], b[19], b[20], obj.prob));
          }
        });

      });
    });
  }

  back() {
    this.router.navigate(["search"]);
  }

  detailsNav(id: string) {
    this.selected.setBusiness(this.businesses.find(o => o.businessId === id));
    this.selected.setPrevData(this.zip, this.type);
    this.router.navigate(['business-details/' + id]);
  }
}
