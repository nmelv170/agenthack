import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BusinessSearchService {

  constructor(private http: HttpClient) { }

  //TODO: get list of businesses and prob scores?
}
