import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import jwt_decode from 'jwt-decode';
import { ReservasService } from 'src/app/services/reservas.service';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  clienteList: any = {};
  reservasList: any = [];
  aulasList: any = [];

  constructor(private aulasService: AulasService, private accountService: AccountService, private reservasService: ReservasService) {}

  dayOfWeek = new Date().toLocaleString('pt-BR', { weekday: 'long' });
  days: any = {
    "domingo": "Day Off",
    "segunda-feira": "Peitoral",
    "terça-feira": "Costa",
    "quarta-feira": "Pernas",
    "quinta-feira": "Bíceps",
    "sexta-feira": "Tríceps",
    "sabado": "Day Off"
  };

  ngOnInit(): void {
    const token = this.accountService.getAuthorizationToken();
    const tokenInfo = this.getDecodedAccessToken(token);
    console.log(tokenInfo);
    this.getClienteById(tokenInfo.id);
    this.readReservas();
    this.readAulas();
    console.log(this.aulasList);
  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  getClienteById(id:any): void {
    this.accountService.getClienteById(id)
    .subscribe(
      cliente => {
        this.clienteList = cliente;
      },
      error => {
        console.log(error);
      }
    )
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

  readAulas(): void {
    this.aulasService.getAulas()
    .subscribe(
      aulas => {
        this.aulasList = aulas;
        console.log(this.aulasList);
      },
      error => {
        console.log(error);
      }
    )
  }

}
