import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'الرئيسية', url: '/folder/1', icon: 'home' },
    { title: 'السبحة الآلكترونية', url: '/folder/2', icon: 'hourglass' },
    { title: 'القرآن الكريم', url: '/folder/3', icon: 'book' },
    { title: 'اذكار المسلم', url: '/folder/4', icon: 'partly-sunny' },
    { title: 'مواقيت الصلاة', url: '/folder/5', icon: 'alarm' },
    // { title: 'الورد اليومي', url: '/folder/6', icon: 'bookmarks' },
    { title: ' الاعدادات', url: '/folder/7', icon: 'settings' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {
    this.router.navigateByUrl('splash');
  }
}
