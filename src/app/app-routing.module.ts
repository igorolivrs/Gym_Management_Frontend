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
import { ReservasComponent } from './pages/reservas/reservas.component';
import { PerfilClientesComponent } from './backoffice/perfil-clientes/perfil-clientes.component';
import { ReservasDetailsComponent } from './pages/reservas-details/reservas-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConsultAulasComponent } from './backoffice/consult-aulas/consult-aulas.component';
import { ConsultAulasDetailsComponent } from './backoffice/consult-aulas-details/consult-aulas-details.component';
import { ConsultTreinosComponent } from './backoffice/consult-treinos/consult-treinos.component';
import { AddTreinosComponent } from './backoffice/add-treinos/add-treinos.component';
import { ConsultTreinosDetailsComponent } from './backoffice/consult-treinos-details/consult-treinos-details.component';
import { TreinosDetailsComponent } from './pages/treinos-details/treinos-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      { path: '', redirectTo: 'painel', pathMatch: 'full' },
      { path: 'painel', component: PainelComponent},
      { path: 'perfil', component: PerfilComponent},
      { path: 'aulas', component: AulasComponent},
      { path: 'aulas/details/:id', component: AulasDetailsComponent},
      { path: 'treinos', component: TreinosComponent},
      { path: 'treinos/details/:id', component: TreinosDetailsComponent},
      { path: 'reservas', component: ReservasComponent},
      { path: 'reservas/details/:id', component: ReservasDetailsComponent},
      { path: 'backoffice/clientes', component: ClientesComponent},
      { path: 'backoffice/clientes/:id', component: PerfilClientesComponent},
      { path: 'backoffice/aulas', component: ConsultAulasComponent},
      { path: 'backoffice/adicionar/aulas', component: AddAulasComponent},
      { path: 'backoffice/aulas/:id', component: ConsultAulasDetailsComponent},
      { path: 'backoffice/treinos', component: ConsultTreinosComponent},
      { path: 'backoffice/adicionar/treinos/:id', component: AddTreinosComponent},
      { path: 'backoffice/treinos/details/:id', component: ConsultTreinosDetailsComponent},
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
      { path: 'error', component: NotFoundComponent },
    ]
  },
  { 
    path:'**', redirectTo:'error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
