import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  clienteList: any;

  constructor(private accountService: AccountService) {}

  

  ngOnInit(): void {
    const token = this.accountService.getAuthorizationToken();
    const tokenInfo = this.getDecodedAccessToken(token);
    console.log(tokenInfo);
    this.getClienteById(tokenInfo.id);
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

}
