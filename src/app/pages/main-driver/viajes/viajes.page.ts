import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorTravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage {

    travelData: any = {
  };
  

  constructor(
    private conductorTravelService: ConductorTravelService,
    private router: Router
  ) {}

  createTravel() {
    this.conductorTravelService.createTravel(this.travelData)
      .then(() => {
        console.log('Viaje creado con éxito');
        this.router.navigate(['/viajes']); // Redirigir a la lista de viajes del conductor
      })
      .catch(error => {
        console.error('Error al crear el viaje:', error);
      });
  }

  
}
