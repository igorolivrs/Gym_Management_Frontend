import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  cliente: any = {};

  updateAccount = {
    name: '',
    email: '',
    nif: '',
    password: '',
  };

  constructor(private accountService: AccountService, private toast: NgToastService) {}

  ngOnInit(): void {
    const token = this.accountService.getAuthorizationToken();
    const tokenInfo = this.accountService.getDecodedAccessToken(token);
    console.log(tokenInfo);
    this.getClienteById(tokenInfo.id);
  }

  getClienteById(id:any): void {
    this.accountService.getClienteById(id)
    .subscribe(
      cliente => {
        this.cliente = cliente;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateCliente(id: any): void {
    const data = {
      name: this.updateAccount.name,
      email: this.updateAccount.email,
      nif: this.updateAccount.nif,
      password: this.updateAccount.password
    };

    this.accountService.updateCliente(id, data)
    .subscribe(
      (res) => {
        this.toast.success({detail: "SUCCESS", summary: "Dados atualizados com sucesso", duration: 4000});
        console.log(res);
      },
      error => {
        this.toast.error({detail: "ERROR", summary: `${error}`, duration: 4000});
        console.log(error);
      }
    )

  }

}
