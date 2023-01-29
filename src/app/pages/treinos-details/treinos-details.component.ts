import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-treinos-details',
  templateUrl: './treinos-details.component.html',
  styleUrls: ['./treinos-details.component.css']
})
export class TreinosDetailsComponent {

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

  constructor(private treinosService: TreinosService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
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

}
