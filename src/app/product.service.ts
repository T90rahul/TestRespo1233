import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private sharedData = new Subject();

  private apiUrl =
    'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  private triggerFunctionSource = new Subject<void>();
  triggerFunction$ = this.triggerFunctionSource.asObservable();

  triggerGreatGrandchildFunction() {
    this.triggerFunctionSource.next();
  }

  private sortFunction = new Subject<void>();
  sortFunction$ = this.sortFunction.asObservable();

  callSortFunctionGreatGrandchildFunction() {
    this.sortFunction.next();
  }

  // Fetch a list of EMP from the API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Setter method to set the shared data
  setSharedData(data: any) {
    this.sharedData.next(data);
  }

  // Getter method to get the shared data
  getSharedData() {
    return this.sharedData;
  }
}
