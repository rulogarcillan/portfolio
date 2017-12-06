import { Timeline } from './../mis_componentes/job/timeline';
import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import { Boton } from '../mis_componentes/profile/boton';
import { ProfileData } from '../mis_componentes/profile/profile-data';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss']
})
export class DossierComponent implements OnInit {

  @Input() jobs: Timeline[];
  constructor(private _profileDataService: ProfileDataService, private _timelineServices: TimelineService) { }
  public isAbrir = false;

  ngOnInit() {
  }

  onClickButton(boton: Boton) {
    if (boton.external) {
      window.open(boton.link, '_blank');
    } else {
      // TODO
    }
  }

  onMenuOpen(isAbrir: boolean) {
    this.isAbrir = isAbrir;
  }

  getProfileData(): ProfileData {
    return this._profileDataService.getProfileData();
  }

  getNetButtons(): Boton[] {
    return this._profileDataService.getNetButtons();
  }

  getTimeline(): Timeline[] {
    return this._timelineServices.getTimeline();
  }

}
