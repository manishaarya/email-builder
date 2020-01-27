import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @HostBinding('class.content-container') class = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
