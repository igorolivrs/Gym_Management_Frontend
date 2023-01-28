import { Component } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {

  reservasList: any = [];

  constructor(private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.readReservas();
  }


  readReservas(): void {
    this.reservasService.getReserva()
      .subscribe(
        reservas => {
          this.reservasList = reservas;
          console.log(this.reservasList);
        },
        error => {
          console.log(error);
        }
      )
  }

}
