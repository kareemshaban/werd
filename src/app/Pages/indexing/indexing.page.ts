import { EventService } from './../../Services/event.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as localforage from 'localforage';

@Component({
  selector: 'app-indexing',
  templateUrl: './indexing.page.html',
  styleUrls: ['./indexing.page.scss'],
})
export class IndexingPage implements OnInit {


  data = [] ;
  constructor(private modalCtrl: ModalController , private eventService: EventService) {
    this.data = environment.indexing ;
    console.log(this.data);
  }

  ngOnInit() {
  }

 async dismiss(){
    await this.modalCtrl.dismiss();
  }
  goTo(index){
    localforage.setItem('page' , index - 1) ;
    this.eventService.publishIndex(index - 1);
    this.dismiss();
  }
}
