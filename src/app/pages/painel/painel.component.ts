import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import jwt_decode from 'jwt-decode';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  clienteList: any = {};
  reservasList: any = [];

  constructor(private accountService: AccountService, private reservasService: ReservasService) {}

  

  ngOnInit(): void {
    const token = this.accountService.getAuthorizationToken();
    const tokenInfo = this.getDecodedAccessToken(token);
    console.log(tokenInfo);
    this.getClienteById(tokenInfo.id);
    this.readReservas();
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

}
