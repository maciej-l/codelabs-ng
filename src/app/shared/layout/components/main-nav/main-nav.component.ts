import { MainNavigation } from './../../../config/main-navigation';
import { MainNavigationModel } from './../../../models/main-nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  public navigation: MainNavigationModel[] = MainNavigation;

  constructor() { }

  ngOnInit(): void {
  }

}
