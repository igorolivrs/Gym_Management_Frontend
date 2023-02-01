import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css']
})
export class AddClientesComponent {

  cliente: any = {
    id: 0,
    name: '',
    email: '',
    nif: '',
    password: ''
  };

  constructor(private accountService: AccountService, private route: ActivatedRoute, private toast: NgToastService) { }


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
        this.newCliente();
        console.log(response);
      },
      error => {
        this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
        console.log(error);
      });

  }

  newCliente(): void {
    this.cliente = {
      name: '',
      email: '',
      nif: '',
      password: ''
    };
  }


}
