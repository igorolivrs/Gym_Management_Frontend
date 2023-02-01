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
    {
      number: '5',
      name: 'Reservas',
      icon: 'fa-solid fa-calendar-week',
      rota: '/reservas',
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
      name: 'Consultar Clientes',
      icon: 'fa-solid fa-users',
      rota: 'backoffice/clientes',
    },
    {
      number: '3',
      name: 'Consultar Aulas',
      icon: 'fa-solid fa-table-list',
      rota: '/backoffice/aulas',
    },
    {
      number: '4',
      name: 'Consultar Treinos',
      icon: 'fa-solid fa-dumbbell',
      rota: '/backoffice/treinos',
    },
  ];

  currentCliente: any = {};

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    const token = this.accountService.getAuthorizationToken();
    this.currentCliente = this.accountService.getDecodedAccessToken(token);
    console.log(this.currentCliente);
  }



}
