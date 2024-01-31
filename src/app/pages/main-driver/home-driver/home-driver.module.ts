import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDriverPageRoutingModule } from './home-driver-routing.module';

import { HomeDriverPage } from './home-driver.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDriverPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeDriverPage]
})
export class HomeDriverPageModule {}
