import { Component } from '@angular/core';
import { ProfileDataService } from './profile-data.service';
import { Router } from '@angular/router';
import { ProfileData } from './mis_componentes/profile/profile-data';
import { Boton } from './mis_componentes/profile/boton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _profileDataService: ProfileDataService) { }

  onClickButton(boton: Boton) {
    if (boton.external) {
      window.open(boton.link, '_blank');
    } else {
      console.log('asdasd');
    }
  }

  getProfileData(): ProfileData {
    return this._profileDataService.getProfileData();
  }

  getNetButtons(): Boton[] {
    return this._profileDataService.getNetButtons();
  }
}
