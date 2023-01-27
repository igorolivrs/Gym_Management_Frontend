import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientesList: any = [];
  clientesFilterList: any = [];

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
    this.readClientes();
  }

  searchName(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.clientesFilterList = this.clientesList.filter((cliente:any) => {
      return cliente.name.toLowerCase().includes(value);
    });
  }

  searchNif(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.clientesFilterList = this.clientesList.filter((cliente:any) => {
      return cliente.nif.toLowerCase().includes(value);
    });
  }

  readClientes(): void {
    this.accountService.getCliente()
    .subscribe(
      clientes => {
        this.clientesList = clientes;
        this.clientesFilterList = clientes;
        console.log(this.clientesList);
      },
      error => {
        console.log(error);
      }
    )
  }
}
