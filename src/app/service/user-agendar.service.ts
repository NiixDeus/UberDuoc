// user-reservation.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserReservationService {
  constructor(private firestore: AngularFirestore) {}

  reserveTravel(travelId: string, userData: any): Promise<any> {
    return this.firestore.collection('reservas').doc(travelId).set(userData);
  }

  // Otros métodos según sea necesario
}
