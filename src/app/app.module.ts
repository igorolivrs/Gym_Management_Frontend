import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PainelComponent } from './pages/painel/painel.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { TreinosComponent } from './pages/treinos/treinos.component';
import { NgToastModule } from 'ng-angular-popup';

import { httpInterceptorProviders } from './http-interceptors';
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
import { AddClientesComponent } from './backoffice/add-clientes/add-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    SideBarComponent,
    CreateAccountComponent,
    HeaderComponent,
    FooterComponent,
    PainelComponent,
    PerfilComponent,
    AulasComponent,
    TreinosComponent,
    AulasDetailsComponent,
    ClientesComponent,
    AddAulasComponent,
    ReservasComponent,
    PerfilClientesComponent,
    ReservasDetailsComponent,
    NotFoundComponent,
    ConsultAulasComponent,
    ConsultAulasDetailsComponent,
    ConsultTreinosComponent,
    AddTreinosComponent,
    ConsultTreinosDetailsComponent,
    TreinosDetailsComponent,
    AddClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
