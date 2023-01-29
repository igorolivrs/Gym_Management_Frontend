import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddAulasService } from 'src/app/services/add-aulas.service';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-consult-aulas-details',
  templateUrl: './consult-aulas-details.component.html',
  styleUrls: ['./consult-aulas-details.component.css']
})
export class ConsultAulasDetailsComponent {

  currentAccount: any;

  aulaList: string[] = ['Pilates', 'Body Pump', 'Spinning', 'Power Jump', 'Body Balance', 'Ultimate Body Workout'];

  horarioList: string[] = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:30', '16:00', '16:30', '17:00', '17:00', '17:30', '18:00', '18:30', '19:00'];

  duracaoList: string[] = ['30 minutos', '45 minutos', '60 minutos'];

  nivelList: any = [];

  localList: string[] = ['Salão 1', 'Salão 2', 'Salão 3'];

  aula = {
    id: 0,
    nome_aula: '',
    data: '',
    horario: '',
    instrutor: '',
    local: '',
    duracao: '',
    nivel: '',
    descricao: '',
    image: '',
  };


  constructor(private aulasService: AulasService, private addAulaService: AddAulasService, private route: ActivatedRoute, private toast: NgToastService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const token = this.aulasService.getAuthorizationToken();
    this.currentAccount = this.aulasService.getDecodedAccessToken(token);
    this.getAula(id);
    this.readNiveis();
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

  updateAula(id: any): void {
    const data = {
      nome_aula: this.aula.nome_aula,
      data: this.aula.data,
      horario: this.aula.horario,
      instrutor: this.aula.instrutor,
      local: this.aula.local,
      duracao: this.aula.duracao,
      nivel: this.aula.nivel,
      descricao: this.aula.descricao,
      image: this.aula.image,
    };

    this.aulasService.updateAula(id, data)
      .subscribe(
        (res) => {
          this.toast.success({ detail: "SUCCESS", summary: "Aula alterada com sucesso", duration: 4000 });
          console.log(res);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        }
      )

  }

  deletarAula(id: any): void {
    this.aulasService.deleteAula(id)
      .subscribe(
        response => {
          this.toast.success({ detail: "SUCCESS", summary: "Aula deletada com sucesso", duration: 4000 });
          console.log(response);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        });
  }

  readNiveis(): void {
    this.addAulaService.getNiveis()
      .subscribe(
        niveis => {
          this.nivelList = niveis;
          console.log(this.nivelList);
        },
        error => {
          console.log(error);
        }
      )
  }

}
