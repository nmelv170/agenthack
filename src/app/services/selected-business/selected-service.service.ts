import { Injectable } from '@angular/core';
import { BusinessInfo } from '../../business-model/business-info';

@Injectable()
export class SelectedServiceService {

  private seletedBusiness: BusinessInfo
  
  constructor() { }

  setBusiness(selected:BusinessInfo) {
    this.seletedBusiness = selected;
  }

  getBusiness(): BusinessInfo {
    return this.seletedBusiness
  }

}
