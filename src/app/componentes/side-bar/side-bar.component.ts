import { Component, Input } from '@angular/core';


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

  constructor() {}

  ngOnInit(): void {}

}
