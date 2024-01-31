// conductor-travel.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Travel } from '../models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class ConductorTravelService {
  constructor(private firestore: AngularFirestore) {}

  createTravel(travelData: Travel): Promise<any> {
    return this.firestore.collection('viajes').add(travelData);
  }

  // Otros métodos para obtener, actualizar o eliminar viajes según sea necesario
}
