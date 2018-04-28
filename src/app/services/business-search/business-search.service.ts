import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class BusinessSearchService {

  URI: string = 'https://ussouthcentral.services.azureml.net/workspaces/5bbbe24aa1204901a2e63521041416fd/services/f72baa63847841e5b8a213bb0532cb9a/execute?api-version=2.0&details=true';

  constructor(private http: HttpClient) { }

  businessSearch(zipCode: string, businessType: string) {
    let request =
    { "GlobalParameters": 
      { "Database query": "select * from TestOutput where zip = " + zipCode + " and industry = '" + businessType + "'" }
    }

      return Observable.of(this.mockSearchResults)

    //return this.http.post(this.URI, request, { headers: this.getHeaders() })
  }

  businessLookup(businessIds: Array<string>) {
    let listIds = "";
    for(let id in businessIds) {
      listIds += businessIds[id] + ","
    }

    listIds = listIds.substring(0, listIds.length -1);

    let request = 
      {
        "GlobalParameters":
          { "Database query": "select * from dbo.Business  where id in (" + listIds +")" }
      }

      return Observable.of(this.mockBusLookup);


     //return this.http.post(this.URI, request, { headers: this.getHeaders() })
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer 5qRSZRiChdqP+JGMumMlHgL2vrHLsSxIZxRjvBpJqJFL4U6zr+PiFjSFiM5EHs+lnNooB7zusPvhSm5UMcagYw==');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return headers;
  }

  mockSearchResults = {
    "Results": {
      "output1": {
        "type": "table",
        "value": {
          "ColumnNames": [
            "Id",
            "Zip",
            "Industry",
            "Likelyhood"
          ],
          "ColumnTypes": [
            "Int32",
            "Int32",
            "String",
            "Double"
          ],
          "Values": [
            [
              "20",
              "46001",
              "Restaurants",
              "0.7"
            ],
            [
              "26",
              "46001",
              "Restaurants",
              "0.64"
            ],
            [
              "27",
              "46001",
              "Restaurants",
              "0.63"
            ],
            [
              "28",
              "46001",
              "Restaurants",
              "0.62"
            ],
            [
              "29",
              "46001",
              "Restaurants",
              "0.61"
            ]
          ]
        }
      }
    }
  }

  mockBusLookup = {
    "Results": {
      "output1": {
        "type": "table",
        "value": {
          "ColumnNames": [
            "Id",
            "Name",
            "Established",
            "Industry",
            "StreetAddres",
            "City",
            "State",
            "Zip",
            "Ownership",
            "Employees",
            "Revenue",
            "NeighborhoodScore",
            "BusinessScore",
            "Property",
            "Liability",
            "Auto",
            "Inland",
            "Marin",
            "WorkersComp",
            "InsuranceProvider",
            "PolicyExpiration"
          ],
          "ColumnTypes": [
            "Int32",
            "String",
            "Int32",
            "String",
            "String",
            "String",
            "String",
            "Int32",
            "String",
            "Int32",
            "Double",
            "Double",
            "Double",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "String",
            "DateTime"
          ],
          "Values": [
            [
              "20",
              "Bravo Brio Restaurant Group, Inc.",
              "1995",
              "Restaurants",
              "229 5th Avenue ",
              "Alexandria",
              "IN",
              "46001",
              "rent",
              "350",
              "7700000",
              "800",
              "850",
              "high",
              "high",
              "high",
              "high",
              "medium",
              "high",
              "Allstate",
              "4/20/2019 12:00:00 AM"
            ],
            [
              "26",
              "Rusty Bucket",
              "1990",
              "Restaurants",
              "200 Oak Street ",
              "Alexandria",
              "IN",
              "46001",
              "rent",
              "20",
              "2000000",
              "750",
              "700",
              "high",
              "high",
              "high",
              "high",
              "high",
              "medium",
              "Hiscox",
              "4/26/2019 12:00:00 AM"
            ],
            [
              "27",
              "Asian Kitchen",
              "1999",
              "Restaurants",
              "108 Eagle Street ",
              "Alexandria",
              "IN",
              "46001",
              "rent",
              "10",
              "2300000",
              "850",
              "900",
              "high",
              "medium",
              "high",
              "high",
              "medium",
              "high",
              "Nationwide Mutual Group",
              "4/9/2019 12:00:00 AM"
            ],
            [
              "28",
              "Northstar Café",
              "2005",
              "Restaurants",
              "119 King Street ",
              "Alexandria",
              "IN",
              "46001",
              "rent",
              "25",
              "2600000",
              "850",
              "900",
              "medium",
              "medium",
              "high",
              "high",
              "medium",
              "high",
              "Nationwide Mutual Group",
              "4/10/2019 12:00:00 AM"
            ],
            [
              "29",
              "Mitchell's Ocean Club",
              "2000",
              "Restaurants",
              "130 Ann Street ",
              "Alexandria",
              "IN",
              "46001",
              "rent",
              "20",
              "4000000",
              "850",
              "875",
              "medium",
              "medium",
              "high",
              "high",
              "medium",
              "high",
              "Nationwide Mutual Group",
              "4/11/2019 12:00:00 AM"
            ]
          ]
        }
      }
    }
  }

}
