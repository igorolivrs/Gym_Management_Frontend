import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-add-treinos',
  templateUrl: './add-treinos.component.html',
  styleUrls: ['./add-treinos.component.css']
})
export class AddTreinosComponent {

  currentCliente: any;

  musculosList: string[] = ['Peitoral', 'Costa', 'Ombros', 'Bíceps', 'Tríceps', 'Pernas'];
  seriesList: string[] = ['1', '2', '3', '4', '5', '6'];
  repeticoesList: string[] = ['6 - 10', '8 - 12', '12 - 15'];
  descansoList: string[] = ['30 segundos', '45 segundos', '60 segundos'];


  treino = {
    cliente_id: 0,
    musculo: '',
    exercicio: '',
    exercicio2: '',
    exercicio3: '',
    exercicio4: '',
    exercicio5: '',
    series: '',
    series2: '',
    series3: '',
    series4: '',
    series5: '',
    repeticoes: '',
    repeticoes2: '',
    repeticoes3: '',
    repeticoes4: '',
    repeticoes5: '',
    descanso: '',
    descanso2: '',
    descanso3: '',
    descanso4: '',
    descanso5: '',
    image: '',
  };


  constructor(private treinosService: TreinosService, private toast: NgToastService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentCliente = this.route.snapshot.paramMap.get('id');
  }


  createTreino(): void {
    const data = {
      cliente_id: this.currentCliente,
      musculo: this.treino.musculo,
      exercicio: this.treino.exercicio,
      exercicio2: this.treino.exercicio2,
      exercicio3: this.treino.exercicio3,
      exercicio4: this.treino.exercicio4,
      exercicio5: this.treino.exercicio5,
      series: this.treino.series,
      series2: this.treino.series2,
      series3: this.treino.series3,
      series4: this.treino.series4,
      series5: this.treino.series5,
      repeticoes: this.treino.repeticoes,
      repeticoes2: this.treino.repeticoes2,
      repeticoes3: this.treino.repeticoes3,
      repeticoes4: this.treino.repeticoes4,
      repeticoes5: this.treino.repeticoes5,
      descanso: this.treino.descanso,
      descanso2: this.treino.descanso2,
      descanso3: this.treino.descanso3,
      descanso4: this.treino.descanso4,
      descanso5: this.treino.descanso5,
      image: this.treino.image,
    };

    this.treinosService.createTreino(data).subscribe(
      response => {
        this.toast.success({ detail: "SUCCESS", summary: "Treino criado com sucesso", duration: 4000 });
        this.newTreino();
        console.log(response);
      },
      error => {
        this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
        console.log(error);
      });
  }

  newTreino(): void {
    this.treino = {
      cliente_id: 0,
      musculo: '',
      exercicio: '',
      exercicio2: '',
      exercicio3: '',
      exercicio4: '',
      exercicio5: '',
      series: '',
      series2: '',
      series3: '',
      series4: '',
      series5: '',
      repeticoes: '',
      repeticoes2: '',
      repeticoes3: '',
      repeticoes4: '',
      repeticoes5: '',
      descanso: '',
      descanso2: '',
      descanso3: '',
      descanso4: '',
      descanso5: '',
      image: '',
    };
  }

}
