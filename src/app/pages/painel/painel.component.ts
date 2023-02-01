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

  currentCliente: any = {};
  nClientesList: any;
  reservasList: any = [];
  aulasList: any = [];
  numbers: number[] = [];

  constructor(private aulasService: AulasService, private accountService: AccountService, private reservasService: ReservasService) {
    for (let i = 0; i < 3; i++) {
      this.numbers.push(Math.floor(Math.random() * 42) + 1);
    }
  }

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
    this.readClientes();
    this.readAulas();
    console.log(this.aulasList);
    console.log(this.numbers);
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
        this.currentCliente = cliente;
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

  readClientes(): void {
    let nclientes: any = [];
    this.accountService.getCliente()
    .subscribe(
      clientes => {
        nclientes = clientes;
        this.nClientesList = nclientes.length;
        console.log(this.nClientesList);
      },
      error => {
        console.log(error);
      }
    )
  }

}
