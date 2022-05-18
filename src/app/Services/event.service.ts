import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private index = new Subject<any>();
  constructor() { }


  publishIndex(data: any) {
    this.index.next(data);
  }
  getIndex(): Subject<any> {
    return this.index ;
  }
}
