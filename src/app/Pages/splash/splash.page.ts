import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.router.navigateByUrl('');
      clearInterval(interval);
    }, 5000);
  }

}
