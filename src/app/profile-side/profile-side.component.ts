import { Component, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation } from 'angular-animations'

@Component({
  selector: 'app-profile-side',
  templateUrl: './profile-side.component.html',
  styleUrls: ['./profile-side.component.scss'],
  animations: [
    fadeInLeftOnEnterAnimation({ duration: 1000 })
  ]
})
export class ProfileSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
