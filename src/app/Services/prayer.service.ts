import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor( private http: HttpClient) { }

  getPrayers(lat , long , month , year): Observable<any>{
    const url  = 'https://api.aladhan.com/v1/calendar?latitude='+lat + '&longitude=' +long + '&method=1&month=' +month +'&year='+ year ;
     console.log(url);
    return this.http.get(url);
  }
}
