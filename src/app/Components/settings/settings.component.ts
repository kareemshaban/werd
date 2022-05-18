import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  vibrat: boolean ; 
  resAny: any ;
  constructor() { }

  ngOnInit() {
    localforage.getItem('vibrate').then(res => {
      this.resAny = res ;
      this.vibrat = this.resAny ;
   }).catch(err =>{
       this.vibrat = true ;
   });
  }

  vibrate(eve){
    console.log(eve.detail.checked);
    localforage.setItem('vibrate' , Boolean(eve.detail.checked));
  }

}
