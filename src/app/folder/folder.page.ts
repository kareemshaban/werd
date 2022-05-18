import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IndexingPage } from '../Pages/indexing/indexing.page';
import * as moment from 'moment';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public id: string;
  hijiri_date = '' ;
  constructor(private activatedRoute: ActivatedRoute , private modalCtrl: ModalController ) {

   }

  ngOnInit() {
 

    this.id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    switch(this.id){
     case '1' :{
    this.folder = 'الورد اليومي' ;
     break;
     }
     case '2' :{
      this.folder = 'السبحة  ' ;
      break;
       }
       case '3' :{
        this.folder = 'القرآن الكريم' ;
        break;
         }

         case '4' :{
          this.folder = 'اذكار المسلم ' ;
          break;
           }

           case '5' :{
            this.folder = 'مواقيت الصلاة  ' ;
            break;
             }
             case '6' :{
              this.folder = 'الورد اليومي  ' ;
              break;
               }
               case '7' :{
                this.folder = ' الاعدادات   ' ;
                break;
                 }
    }
  }
  async openIndexing(){
    const  modal = await this.modalCtrl.create({
      cssClass: 'my-custom-modal-css',
      component: IndexingPage,
      componentProps: {}
    });
    return await modal.present();
  }
  openTarget(){
  }

}


