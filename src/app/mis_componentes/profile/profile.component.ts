import { ProfileData } from './profile-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Boton } from './boton';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() rounded = true;
  @Input() profileData: ProfileData;
  @Output() onClickButton = new EventEmitter<Boolean>();

  private abrir = false;

  constructor() { }

  ngOnInit() {

  }

  getBorderRadius(): boolean { return this.rounded; }

  clickButton() {
    this.abrir = !this.abrir;
    this.onClickButton.emit(this.abrir);
  }

}
