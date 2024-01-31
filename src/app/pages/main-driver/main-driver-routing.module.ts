import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDriverPage } from './main-driver.page';

const routes: Routes = [
  {
    path: '',
    component: MainDriverPage
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'profile-driver',
    loadChildren: () => import('./profile-driver/profile-driver.module').then( m => m.ProfileDriverPageModule)
  },
  {
    path: 'home-driver',
    loadChildren: () => import('./home-driver/home-driver.module').then( m => m.HomeDriverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDriverPageRoutingModule {}
 