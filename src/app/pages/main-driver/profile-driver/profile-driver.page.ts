import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-profile-driver',
  templateUrl: './profile-driver.page.html',
  styleUrls: ['./profile-driver.page.scss'],
})
export class ProfileDriverPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  ngOnInit() {
  }



  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // ============= Tomar / Seleccionar imagen =============
  async takeImage() {

    let user = this.user();
    let path = `users/${user.uid}`



    const dataUrl = (await this.utilsSvc.takePicture("Imagen de perfil")).dataUrl;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    let imagePath = `${user.uid}/profile-Driver`;
    user.image = await this.firebaseSvc.uploadImage(imagePath, dataUrl);

    this.firebaseSvc.updateDocument(path, { image: user.image }).then(async res => {

      this.utilsSvc.saveInLocalStorage('user', user);

      this.utilsSvc.presentToast({
        message: 'Imagen de perfil actualizada',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      })


    }).catch(error => {
      console.log(error);

      this.utilsSvc.presentToast({
        message: 'Error al actualizar imagen de perfil',
        duration: 2500,
        color: 'danger',
        position: 'middle',
        icon: 'alert-circle-outline'
      })

    }).finally(() => {
      loading.dismiss();
    })

  }
}
