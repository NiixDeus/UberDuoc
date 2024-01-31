import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainDriverPageRoutingModule } from './main-driver-routing.module';

import { MainDriverPage } from './main-driver.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDriverPageRoutingModule,
    SharedModule
  ],
  declarations: [MainDriverPage]
})
export class MainDriverPageModule {}
