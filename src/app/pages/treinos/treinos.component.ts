import { Component } from '@angular/core';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent {

  currentCliente: any;
  treinosList: any = [];
  treinosFilterList: any = [];

  constructor(private treinosService: TreinosService) { }

  ngOnInit(): void {
    const token = this.treinosService.getAuthorizationToken();
    this.currentCliente = this.treinosService.getDecodedAccessToken(token);
    this.readTreinos();
    console.log(this.treinosList)
  }


  readTreinos(): void {
    this.treinosService.getTreinos()
      .subscribe(
        treinos => {
          this.treinosList = treinos;
          this.treinosFilterList = this.filterCustomers(this.currentCliente.id)
          console.log(this.currentCliente.id);
          console.log(this.treinosList);
          console.log(this.treinosFilterList);
        },
        error => {
          console.log(error);
        }
      )
  }

  filterCustomers(id: number) {
    return this.treinosList.filter((treino: { cliente_id: number; }) => treino.cliente_id === id);
  }


}
