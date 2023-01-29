import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-consult-treinos',
  templateUrl: './consult-treinos.component.html',
  styleUrls: ['./consult-treinos.component.css']
})
export class ConsultTreinosComponent {

  currentCliente: any;
  currentAccount: any = [];
  treinosList: any = [];
  treinosFilterList: any = []

  constructor(private treinosService: TreinosService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.currentCliente = this.route.snapshot.paramMap.get('id');
    const token = this.treinosService.getAuthorizationToken();
    this.currentAccount = this.treinosService.getDecodedAccessToken(token);
    this.readTreinos();
  }

  readTreinos(): void {
    this.treinosService.getTreinos()
    .subscribe(
      treinos => {
        this.treinosList = treinos;
        this.treinosFilterList = treinos;
        console.log(this.treinosList);
      },
      error => {
        console.log(error);
      }
    )
  }

  searchID(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.treinosFilterList = this.treinosList.filter((treino:any) => {
      return treino.cliente_id.toString().includes(value);
    });

  }

}
