import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { PainelComponent } from './pages/painel/painel.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TreinosComponent } from './pages/treinos/treinos.component';
import { AulasDetailsComponent } from './pages/aulas-details/aulas-details.component';
import { ClientesComponent } from './backoffice/clientes/clientes.component';
import { AddAulasComponent } from './backoffice/add-aulas/add-aulas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      { path: '', redirectTo: 'painel', pathMatch: 'full' },
      { path: 'painel', component: PainelComponent},
      { path: 'perfil', component: PerfilComponent},
      { path: 'aulas', component: AulasComponent},
      { path: 'treinos', component: TreinosComponent},
      { path: 'aulas-details/:id', component: AulasDetailsComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'add-aulas', component: AddAulasComponent},
    ],
    canActivate: [AuthGuard]

  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
