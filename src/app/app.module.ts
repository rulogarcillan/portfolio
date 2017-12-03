import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './mis_componentes/footer/footer.component';
import { ProfileComponent } from './mis_componentes/profile/profile.component';
import { ProfileDataService } from './profile-data.service';
import { RedesComponent } from './mis_componentes/redes/redes.component';
import { BurbujasComponent } from './mis_componentes/burbujas/burbujas.component';
import { DossierComponent } from './dossier/dossier.component';
import { JobComponent } from './mis_componentes/job/job.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProfileComponent,
    RedesComponent,
    BurbujasComponent,
    DossierComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
