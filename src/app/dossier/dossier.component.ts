import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import { Router } from '@angular/router';
import { ProfileData } from '../mis_componentes/profile/profile-data';
import { Boton } from '../mis_componentes/profile/boton';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss']
})
export class DossierComponent implements OnInit {

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

  print(): void {
    console.log('as');
  }

}
