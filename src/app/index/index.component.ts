import { Boton } from './../mis_componentes/profile/boton';
import { ProfileData } from './../mis_componentes/profile/profile-data';
import { ProfileDataService } from './../profile-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private _profileDataService: ProfileDataService, private _router: Router) { }

  ngOnInit() {


  }

  onClickButton(boton: Boton) {
    if (boton.external) {
      window.open(boton.link, '_blank');
    } else {
      this._router.navigateByUrl(boton.link);
    }
  }

  getProfileData(): ProfileData {
    return this._profileDataService.getProfileData();
  }

}
