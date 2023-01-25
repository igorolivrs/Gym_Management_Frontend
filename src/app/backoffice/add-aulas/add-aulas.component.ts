import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AddAulasService } from 'src/app/services/add-aulas.service';

@Component({
  selector: 'app-add-aulas',
  templateUrl: './add-aulas.component.html',
  styleUrls: ['./add-aulas.component.css']
})
export class AddAulasComponent implements OnInit {

  aulaList: string[] = ['Pilates', 'Body Pump', 'Spinning', 'Power Jump', 'Body Balance', 'Ultimate Body Workout'];

  horarioList: string[] = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:30', '16:00', '16:30', '17:00', '17:00', '17:30', '18:00', '18:30', '19:00'];

  duracaoList: string[] = ['30 minutos', '45 minutos', '60 minutos'];

  nivelList: string[] = ['Leve', 'Moderado', 'Intenso'];

  localList: string[] = ['Salão 1', 'Salão 2', 'Salão 3'];

  aula = {
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


  constructor(private addAulaService: AddAulasService, private toast: NgToastService) { }

  ngOnInit() {
  }


  createAula(): void {
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

    this.addAulaService.createAula(data).subscribe(
      response => {
        this.toast.success({detail: "SUCCESS", summary: "Aula cadastrada com sucesso", duration: 4000});
        console.log(response);
      },
      error => {
        this.toast.error({detail: "ERROR", summary: `${error}`, duration: 4000});
        console.log(error);
      });

    
  }
}
