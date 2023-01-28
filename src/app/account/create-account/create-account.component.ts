import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account = {
    name: '',
    email: '',
    nif: '',
    password: '',
  };

  constructor(private accountService: AccountService, private router: Router, private toast: NgToastService) { }

  ngOnInit() {
  }

  createAccount(): void {
    const data = {
      name: this.account.name,
      email: this.account.email,
      nif: this.account.nif,
      password: this.account.password
    };

    this.accountService.createAccount(data).subscribe(
      response => {
        this.toast.success({ detail: "SUCCESS", summary: "Utilizador cadastrado com sucesso", duration: 4000 });
        console.log(response);
        this.router.navigate(['']);
      },
      error => {
        this.toast.error({ detail: "ERROR", summary: `${error}`, duration: 4000 });
        console.log(error);
      });

  }


}
