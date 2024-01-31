import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-main-driver',
  templateUrl: './main-driver.page.html',
  styleUrls: ['./main-driver.page.scss'],
})
export class MainDriverPage implements OnInit {


  pages = [
    { title: 'Inicio', url: '/main-driver/home-driver', icon: 'home-outline' },
    { title: 'Perfil', url: '/main-driver/profile-driver', icon: 'person-outline' },
    { title: 'Viajes', url: '/main-driver/viajes', icon: 'car-outline' },

  ]


  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  currentPath: string = '';




  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event?.url) this.currentPath = event.url;
    })
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }



  // ============= Cerrar sesion =============
  signOut() {
    this.firebaseSvc.signOut();
  }

}
