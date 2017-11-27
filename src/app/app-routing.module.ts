import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DossierComponent } from './dossier/dossier.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'dossier',
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
