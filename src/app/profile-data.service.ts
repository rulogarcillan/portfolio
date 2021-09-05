import { Injectable } from '@angular/core';
import { ProfileData } from './mis_componentes/profile/profile-data';
import { Boton } from './mis_componentes/profile/boton';

@Injectable()
export class ProfileDataService {

  private _profileData: ProfileData = {
    urlFoto: '../../assets/images/yo2.png',
    nombre: 'Raúl',
    apellidos: 'Rodríguez',
    descripcion: 'Full Stack Sofware Developer'
  };

  private _redes: Boton[] = [ {
    urlImagen: '../../assets/images/github.png',
    link: 'https://github.com/rulogarcillan',
    external: true
  } ,{
    urlImagen: '../../assets/images/playstore.png',
    link: 'https://play.google.com/store/apps/developer?id=Ra%C3%BAl%20R.&hl=es',
    external: true
  }, {
    urlImagen: '../../assets/images/twitter.svg',
    link: 'https://twitter.com/tuppersoft',
    external: true
  }, {
    urlImagen: '../../assets/images/dev.svg',
    link: 'https://dev.to/rulogarcillan',
    external: true
  },{
    urlImagen: '../../assets/images/linkedin.svg',
    link: 'https://www.linkedin.com/in/raul-rodriguez-concepcion',
    external: true
  }, {
    urlImagen: '../../assets/images/gmail.svg',
    link: 'mailto:raulrcs@gmail.com',
    external: true
  }];

  constructor() { }

  getProfileData(): ProfileData {
    return this._profileData;
  }

  getNetButtons(): Boton[] {
    return this._redes;
  }


}
