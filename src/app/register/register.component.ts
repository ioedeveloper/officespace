import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = true;
  public error = [];

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loading = false;
    }, 3000);

  }

  onSubmit(form: NgForm) {
    if (form.value['rpassword'] !== form.value['password']) {
      this.error['password'] = 'password mismatch';
    }
  }

}
