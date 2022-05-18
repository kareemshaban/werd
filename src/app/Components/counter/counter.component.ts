import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  currentCount: number ;
  totalCount: number ;
  resAny: any ;
  vibrate: boolean ;
  constructor(private vibration:Vibration , private alertController:AlertController) { 

  }

  ngOnInit() {
    this.getData();
  }


   countEvent() {
     if( this.vibrate){
       if(this.currentCount === 32 || this.currentCount === 99
        || this.currentCount === 999 ){
      this.vibration.vibrate(0);
      this.vibration.vibrate(200);
        }
     }

    this.currentCount += 1 ;
    this.totalCount += 1 ;
    localforage.setItem('currentCount' , this.currentCount);
    localforage.setItem('totalCount' , this.totalCount);
  }

  getData(){
    localforage.getItem('vibrate').then(res => {
       this.resAny = res ;
       this.vibrate = Boolean( this.resAny) ;

    }).catch(err =>{
        this.vibrate = true ;
    });
    localforage.getItem('currentCount').then(res =>{
      this.resAny =  res ;
      if(this.resAny){
        this.currentCount = this.resAny ;
      } else {
        this.currentCount = 0 ;
      }
     }).catch(err => {
      this.currentCount = 0 ;
     });
     localforage.getItem('totalCount').then(res =>{
      this.resAny =  res ;
      if(this.resAny){
        this.totalCount = this.resAny ;
      } else {
        this.totalCount = 0 ;
      }
    }).catch(err => {
      this.totalCount = 0 ;
    });
  }

  resetCurrnCount(){
    this.currentCount = 0 ;
    localforage.setItem('currentCount' , this.currentCount);
  }
 async resetTotalCount(){
  const alert = await this.alertController.create({
      header: 'تحذير',
      message: 'هل تريد تصفير العداد الاجمالي الخاص بك ؟',
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        } , {
          text: 'تأكيد',
          handler: () => {
            this.totalCount = 0 ;
            this.currentCount = 0 ;
            localforage.setItem('currentCount' , this.currentCount);
            localforage.setItem('totalCount' , this.totalCount);
          }
        }
    ]
    });
    await alert.present();
  }
}
