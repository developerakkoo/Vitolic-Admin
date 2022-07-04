import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  headerData = new BehaviorSubject({});
  observeHeaderDataService = this.headerData.asObservable();
  constructor() {}

  setHeaderData(data: any) {
    this.headerData.next(data);
  }
}
