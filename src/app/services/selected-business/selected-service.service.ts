import { Injectable } from '@angular/core';
import { BusinessInfo } from '../../business-model/business-info';

@Injectable()
export class SelectedServiceService { //oops on the name

  private seletedBusiness: BusinessInfo
  private prevZip: string;
  private prevType: string;

  constructor() { }

  setBusiness(selected:BusinessInfo) {
    this.seletedBusiness = selected;
  }

  getBusiness(): BusinessInfo {
    return this.seletedBusiness
  }

  setPrevData(zip: string, type: string) {
    this.prevZip = zip;
    this.prevType = type;
  }

  getPrevZip(): string {
    return this.prevZip;
  }

  getPrevType(): string {
    return this.prevType;
  }

}
