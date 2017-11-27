import { Injectable } from '@angular/core';
import { ProfileData } from './mis_componentes/profile/profile-data';

@Injectable()
export class ProfileDataService {

  private _profileData: ProfileData = {

    urlFoto: '../../assets/images/yo2.png',
    nombre: 'Raúl Rodríguez Concepción',
    descripcion: 'Full Stack Sofware Developer',
    enlaces: [{
      urlImagen: '../../assets/images/developer.png',
      link: '/dossier',
      external: false
    }, {
      urlImagen: '../../assets/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/raul-rodriguez-concepcion',
      external: true
    }, {
      urlImagen: '../../assets/images/github.png',
      link: 'https://github.com/rulogarcillan',
      external: true
    }, {
      urlImagen: '../../assets/images/gmail.svg',
      link: 'mailto:raulrcs@gmail.com',
      external: true
    }]
  };


  constructor() { }

  getProfileData(): ProfileData {
    return this._profileData;
  }

}
