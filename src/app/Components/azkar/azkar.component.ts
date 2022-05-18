import { ZekrPage } from './../../Pages/zekr/zekr.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azkar',
  templateUrl: './azkar.component.html',
  styleUrls: ['./azkar.component.scss'],
})
export class AzkarComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openIndexing(which , title){
    const  modal = await this.modalCtrl.create({
      cssClass: 'my-custom-modal-css2',
      component: ZekrPage,
      componentProps: {which: which , title:title}
    });
    return await modal.present();
  }

}
