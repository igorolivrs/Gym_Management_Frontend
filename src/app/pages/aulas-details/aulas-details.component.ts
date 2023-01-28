import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AulasService } from 'src/app/services/aulas.service';
import jwt_decode from 'jwt-decode';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-aulas-details',
  templateUrl: './aulas-details.component.html',
  styleUrls: ['./aulas-details.component.css']
})
export class AulasDetailsComponent {

  currentCliente: any;

  aula = {
     data: "",
     descricao: "",
     duracao: "",
     horario: "",
     id: "",
     instrutor: "",
     local: "",
     nivel: "",
     nome_aula: "",
     image: ""
  };

  constructor(private aulasService: AulasService, private route: ActivatedRoute, private toast: NgToastService, private reservasService: ReservasService) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAula(id);
    const token = this.aulasService.getAuthorizationToken();
    this.currentCliente = this.getDecodedAccessToken(token); 

    console.log(this.currentCliente);
  }

  getAula(id: any): void {
    this.aulasService.getAulaById(id)
      .subscribe((data: any) => {
        this.aula = data;
        console.log(this.aula);
      }, error => {
        console.log(error);
      });
  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }


  reservarAula(): void {
    const data = {
      cliente_id: this.currentCliente.id,
      aula_id: this.aula.id,
      aula_nome: this.aula.nome_aula,
      aula_data: this.aula.data,
      aula_horario: this.aula.horario,
      aula_instrutor: this.aula.instrutor,
      aula_local: this.aula.local,
      aula_duracao: this.aula.duracao,
      aula_nivel: this.aula.nivel,
      aula_descricao: this.aula.descricao,
      aula_image: this.aula.image
    };

    this.reservasService.reservarAula(data).subscribe(
      response => {
        this.toast.success({detail: "SUCCESS", summary: "Reserva realizada com sucesso", duration: 4000});
        console.log(response);
      },
      error => {
        this.toast.error({detail: "ERROR", summary: `${error}`, duration: 4000});
        console.log(error);
      });
  }

}
