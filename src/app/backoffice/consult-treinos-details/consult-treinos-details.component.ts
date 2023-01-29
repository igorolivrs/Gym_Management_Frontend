import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-consult-treinos-details',
  templateUrl: './consult-treinos-details.component.html',
  styleUrls: ['./consult-treinos-details.component.css']
})
export class ConsultTreinosDetailsComponent {

  currentAccount: any;

  musculosList: string[] = ['Peitoral', 'Costa', 'Ombros', 'Bíceps', 'Tríceps', 'Pernas'];
  seriesList: string[] = ['1', '2', '3', '4', '5', '6'];
  repeticoesList: string[] = ['6 - 10', '8 - 12', '12 - 15'];
  descansoList: string[] = ['30 segundos', '45 segundos', '60 segundos'];

  treino: any = {
    id: 0,
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

  constructor(private treinosService: TreinosService, private route: ActivatedRoute, private toast: NgToastService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const token = this.treinosService.getAuthorizationToken();
    this.currentAccount = this.treinosService.getDecodedAccessToken(token);
    this.getTreino(id);
  }

  getTreino(id: any): void {
    this.treinosService.getTreinoById(id)
      .subscribe((data: any) => {
        this.treino = data;
        console.log(this.treino);
      }, error => {
        console.log(error);
      });
  }

  updateTreino(id: any): void {
    const data = {
      cliente_id: this.treino.cliente_id,
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

    this.treinosService.updateTreino(id, data)
      .subscribe(
        (res) => {
          this.toast.success({ detail: "SUCCESS", summary: "Treino alterado com sucesso", duration: 4000 });
          console.log(res);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        }
      )

  }

  deletarTreino(id: any): void {
    this.treinosService.deleteTreino(id)
      .subscribe(
        response => {
          this.toast.success({ detail: "SUCCESS", summary: "Treino deletado com sucesso", duration: 4000 });
          console.log(response);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        });
  }

}
