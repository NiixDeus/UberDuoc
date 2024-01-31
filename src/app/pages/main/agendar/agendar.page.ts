import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { UserReservationService } from 'src/app/service/user-agendar.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage  {

  travelId: string;

  userData: any = {
    // Datos del usuario
  };

  constructor(
    private route: ActivatedRoute,
    private userReservationService: UserReservationService
  ) {
    this.travelId = this.route.snapshot.params['id'];
  }

  reserveTravel() {
    this.userReservationService.reserveTravel(this.travelId, this.userData)
      .then(() => {
        console.log('Viaje reservado con éxito');
        // Lógica adicional después de reservar el viaje
      })
      .catch(error => {
        console.error('Error al reservar el viaje:', error);
      });
  }
}
