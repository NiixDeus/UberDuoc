import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-home-driver',
  templateUrl: './home-driver.page.html',
  styleUrls: ['./home-driver.page.scss'],
})
export class HomeDriverPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  // ============= obtener usuario =============

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // ============= cerrar sesion =============
  signOut() {
    this.firebaseSvc.signOut();
  }


}
