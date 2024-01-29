import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);



  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecuperarPassword(this.form.value.email).then(res => {

        this.utilsSvc.presentToast({
          message: 'Correo enviado con exito',
          duration: 1500,
          color: 'dark',
          position: 'middle',
          icon: 'mail-outline'
        });

        this.utilsSvc.routerLink('/auth');
        this.form.reset();


       // error en mensaje de correo no registrado


      }).catch(error => {
        console.log(Error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'dark',
          position: 'middle',
          icon: 'alert-circle-outline'
        })


      }).finally(() => {
        loading.dismiss();
      })




    }
  }

}
