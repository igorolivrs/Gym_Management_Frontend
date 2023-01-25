import { Component, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() sideBarStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Painel',
      icon: 'fa-solid fa-grip-vertical',
      rota: '/painel',
    },
    {
      number: '2',
      name: 'Perfil',
      icon: 'fa-solid fa-address-card',
      rota: '/perfil',
    },
    {
      number: '3',
      name: 'Aulas',
      icon: 'fa-solid fa-table-list',
      rota: '/aulas',
    },
    {
      number: '4',
      name: 'Treinos',
      icon: 'fa-solid fa-dumbbell',
      rota: '/treinos',
    },
  ];

  BackOffice = [
    {
      number: '1',
      name: 'Painel',
      icon: 'fa-solid fa-grip-vertical',
      rota: '/painel',
    },
    {
      number: '2',
      name: 'Clientes',
      icon: 'fa-solid fa-users',
      rota: '/clientes',
    },
    {
      number: '3',
      name: 'Cadastrar Aulas',
      icon: 'fa-regular fa-calendar-plus',
      rota: '/add-aulas',
    },
    {
      number: '4',
      name: 'Aulas',
      icon: 'fa-solid fa-table-list',
      rota: '/aulas',
    },
  ];

  currentCliente: any = {};

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
        this.currentCliente = cliente;
      },
      error => {
        console.log(error);
      }
    )
  }

}
