import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-perfil-clientes',
  templateUrl: './perfil-clientes.component.html',
  styleUrls: ['./perfil-clientes.component.css']
})
export class PerfilClientesComponent {

  currentAccount: any;

  cliente: any = {
    id: 0,
    name: '',
    email: '',
    nif: '',
    password: ''
 };

  constructor(private accountService: AccountService, private route: ActivatedRoute, private toast: NgToastService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const token = this.accountService.getAuthorizationToken();
    this.currentAccount = this.accountService.getDecodedAccessToken(token); 
    this.getClienteById(id);
    console.log(this.currentAccount);
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

  createAccount(): void {
    const data = {
      name: this.cliente.name,
      email: this.cliente.email,
      nif: this.cliente.nif,
      password: this.cliente.password
    };

    this.accountService.createAccount(data).subscribe(
      response => {
        this.toast.success({ detail: "SUCCESS", summary: "Utilizador criado com sucesso", duration: 4000 });
        console.log(response);
      },
      error => {
        this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
        console.log(error);
      });

  }

  updateCliente(id: any): void {
    const data = {
      name: this.cliente.name,
      email: this.cliente.email,
      nif: this.cliente.nif,
      password: this.cliente.password
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

  deletarConta(id: any): void {
    this.accountService.deleteCliente(id)
      .subscribe(
        response => {
          this.toast.success({ detail: "SUCCESS", summary: "Conta deletada com sucesso", duration: 4000 });
          console.log(response);
        },
        error => {
          this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
          console.log(error);
        });
  }

}
