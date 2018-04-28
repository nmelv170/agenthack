import { Component, OnInit } from '@angular/core';
import { BusinessSearchService } from '../services/business-search/business-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessInfo } from '../business-model/business-info';

@Component({
  selector: 'app-business-selection',
  templateUrl: './business-selection.component.html',
  styleUrls: ['./business-selection.component.css']
})
export class BusinessSelectionComponent implements OnInit {

  businesses = [];

  constructor(private searchService: BusinessSearchService,
              private route: ActivatedRoute,
              private router: Router) { }

  //TODO events instead of nesting
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.businesses = [];
      this.searchService.businessSearch(params.get('zipCode'), params.get('businessType')).subscribe((data) => {
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
            console.log(JSON.stringify(businessProbs));
            console.log(b[0]);
            let obj = businessProbs.find(o => o["id"] === b[0]);
            console.log(obj)
            this.businesses.push(new BusinessInfo(b[0], b[1], b[4], b[5], b[6], b[7], b[2], 
                                                  b[8], b[9], b[10], b[11], b[12], b[13],
                                                  b[14], b[15], b[16], b[18], obj.prob));
          }
        });

      });
    });
  }

  back() {
    this.router.navigate(["search"]);
  }
}
