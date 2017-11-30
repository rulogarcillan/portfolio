import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './mis_componentes/footer/footer.component';
import { ProfileComponent } from './mis_componentes/profile/profile.component';
import { ProfileDataService } from './profile-data.service';
import { DossierComponent } from './dossier/dossier.component';
import { RedesComponent } from './mis_componentes/redes/redes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProfileComponent,
    DossierComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
