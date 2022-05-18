import { EventService } from './../../Services/event.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, Platform } from '@ionic/angular';


import * as localforage from 'localforage';


@Component({
  selector: 'app-quraan',
  templateUrl: './quraan.component.html',
  styleUrls: ['./quraan.component.scss'],
})
export class QuraanComponent implements OnInit {

  @ViewChild('slider') slider: IonSlides ;
  collection = [] ;
  resAny: any ;
  index: number ;
  constructor(private eventService:EventService) {
    this.eventService.getIndex().subscribe(res =>{
      this.resAny = res ;
      this.index = this.resAny ;
      this.slider.slideTo(this.index);
    });

   }

  ngOnInit() {
    this.slideToLastPage();
  }
  async dismiss(){

  }
   slideToLastPage(){
     localforage.getItem('page').then(res => {
      this.resAny = res ;
      if(this.resAny){
        this.index = this.resAny ;
        this.slider.slideTo(this.index);
      } else {
        this.index = 0 ;
        this.slider.slideTo(this.index);
      }
      

     }).catch(err =>{
      this.index = 0 ;
      this.slider.slideTo(this.index);
     });
   }
  slideChanged() {
    this.slider.getActiveIndex().then(currentIndex => {
      console.log('Current index is', currentIndex);
      localforage.setItem('page' , currentIndex);
    });
  }
}


