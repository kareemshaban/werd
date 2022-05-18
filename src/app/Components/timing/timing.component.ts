import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { PrayerService } from 'src/app/Services/prayer.service';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss'],
})
export class TimingComponent implements OnInit {

  locLat: number ;
  locLong: number ;
  resAny: any ;
  resJson: JSON ;
  loaded: boolean ;
  prayer1:string ;
  prayer2: string ;
  prayer3:string ;
  prayer4: string ;
  prayer5:string ;
  prayer6: string ;
  constructor(private geolocation: Geolocation , private peayerService: PrayerService , 
    public alertController: AlertController) {
    
   }

  ngOnInit() {
   this.showConfirm();
  }

  showConfirm() {
    this.alertController.create({
      header: 'تأكيد',
      message: 'رجاء التآكد من وجود اتصال انترنت فعال وان خاصية اللوكيشن مفعلة في جهازك',
      buttons: [
        {
          text: 'اتفهم ذلك',
          handler: () => {
         this.prayerFun();
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  prayerFun(){
    this.loaded = false ;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locLat = Number(resp.coords.latitude);
      this.locLong = Number(resp.coords.longitude);
      this.peayerService.getPrayers(this.locLat , this.locLong , new Date().getMonth()+1 , new Date().getFullYear()).subscribe(res =>{
        console.log(res);
        this.resAny = JSON.stringify(res);
        this.resJson = JSON.parse(this.resAny);
        console.log(this.resJson['data'][new Date().getDate() -1]);
         this.prayer1 = this.resJson['data'][new Date().getDate() -1]['timings']['Fajr'];
         this.prayer1 =   this.prayer1.substring( 0 , this.prayer1.indexOf('(') );
         this.prayer2 = this.resJson['data'][new Date().getDate() -1]['timings']['Sunrise'];
         this.prayer2 =   this.prayer2.substring( 0 , this.prayer2.indexOf('(') );
         this.prayer3 = this.resJson['data'][new Date().getDate() -1]['timings']['Dhuhr'];
         this.prayer3 =   this.prayer3.substring( 0 , this.prayer3.indexOf('(') );
         this.prayer4 = this.resJson['data'][new Date().getDate() -1]['timings']['Asr'];
         this.prayer4 =   this.prayer4.substring( 0 , this.prayer4.indexOf('(') );
         this.prayer5 = this.resJson['data'][new Date().getDate() -1]['timings']['Maghrib'];
         this.prayer5 =   this.prayer5.substring( 0 , this.prayer5.indexOf('(') );
         this.prayer6 = this.resJson['data'][new Date().getDate() -1]['timings']['Isha'];
         this.prayer6 =   this.prayer6.substring( 0 , this.prayer6.indexOf('(') );
        this.loaded = true ;
      } , err =>{
        console.log('Error getting Timing' + ' ' +  err);
        this.loaded = true ;
      });
      // resp.coords.longitude
     }).catch((error) => {
       alert('Error getting location' + ' ' +  error);
       this.loaded = true ;
     });
  }

}
