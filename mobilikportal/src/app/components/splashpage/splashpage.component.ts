import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.scss'],
})
export class SplashpageComponent implements OnInit {
  windowWidth: string = '';
  showSplash: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerHeight + 'px';

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 1000);
    }, 2400);
  }
}
