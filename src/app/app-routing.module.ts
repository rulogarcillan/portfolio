import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossierComponent } from './dossier/dossier.component';


const routes: Routes = [

  {
    path: '',
    component: DossierComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
