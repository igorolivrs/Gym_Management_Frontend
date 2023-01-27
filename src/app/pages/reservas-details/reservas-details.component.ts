import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas-details',
  templateUrl: './reservas-details.component.html',
  styleUrls: ['./reservas-details.component.css']
})
export class ReservasDetailsComponent {

  currentReserva: any = [];

  reserva = {
    id: 0,
    aula_data: "",
    aula_descricao: "",
    aula_duracao: "",
    aula_horario: "",
    aula_id: "",
    aula_instrutor: "",
    aula_local: "",
    aula_nivel: "",
    aula_nome: "",
    aula_image: ""
  };

  constructor(private reservasService: ReservasService, private route: ActivatedRoute, private toast: NgToastService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getReserva(id);


    console.log(this.currentReserva);
  }

  getReserva(id: any): void {
    this.reservasService.getReservaById(id)
      .subscribe((data: any) => {
        this.reserva = data;
        console.log(this.reserva);
      }, error => {
        console.log(error);
      });
  }

  cancelarReserva(id: any): void {
    this.reservasService.deleteReserva(id)
      .subscribe(
        response => {
          this.toast.success({ detail: "SUCCESS", summary: "Reserva cancelada com sucesso", duration: 4000 });
          console.log(response);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        });
  }
}
