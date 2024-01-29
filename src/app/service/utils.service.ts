import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { AlertController, AlertOptions, LoadingController, ModalController, ModalOptions, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(LoadingController);
  modalCtrl = inject(ModalController);
  router = inject(Router);
  alertCtrl = inject(AlertController)



  async takePicture(promptLabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Toma una foto',
    });
  }

  // ======================= ALERT =======================

  async presentAlert(opts?: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);
    await alert.present();
  }



  // ======================= LOADING =======================

  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }



  // ======================= TOAST =======================

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // ======================= ENRUTA A CUALQUIER PAGINA DISPONIBLE =======================

  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // =========== Guarda elementos en localStorage ==================

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  // =========== Obtiene elementos desde localStorage ==================

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

  // =========== Modal ==================

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }












}


