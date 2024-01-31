import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDriverPageRoutingModule } from './profile-driver-routing.module';

import { ProfileDriverPage } from './profile-driver.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDriverPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileDriverPage]
})
export class ProfileDriverPageModule {}
