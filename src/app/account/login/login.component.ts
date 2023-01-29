import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = {
    nif: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router, private toast: NgToastService) {}

  ngOnInit(){}

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      this.toast.success({detail: "SUCCESS", summary: "Login efetuado com sucesso", duration: 4000});
      console.log(`Login Efetuado: ${result}`);
      this.router.navigate(['']);
    } catch(error) {
      this.toast.error({detail: "ERROR", summary: `${error}`, duration: 4000});
      console.log(error);
    }
  }


}
