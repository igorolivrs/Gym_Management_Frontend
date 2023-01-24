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
