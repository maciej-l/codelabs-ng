import { Component, OnInit } from '@angular/core';
import { DashboardNavigation } from 'src/app/shared/models/dashboard-navigation';
import { dashboardNavigation } from '../../config/dashboard-navigation';

@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnInit {

  public dashboardNavigation: DashboardNavigation[] = dashboardNavigation;

  constructor() { }

  ngOnInit(): void {
  }

}
