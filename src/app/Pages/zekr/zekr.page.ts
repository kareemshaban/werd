import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zekr',
  templateUrl: './zekr.page.html',
  styleUrls: ['./zekr.page.scss'],
})
export class ZekrPage implements OnInit {

  title: string ;
  which: number ;
  constructor(private modalCtrl: ModalController , private navParams: NavParams) {
    this.title = this.navParams.data.title;
    this.which = Number(this.navParams.data.which);
   }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();

  }
  

}
