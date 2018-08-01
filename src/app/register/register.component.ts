import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUser } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = true;
  public error = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit() {

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loading = false;
    }, 3000);

  }

  onSubmit(form: NgForm) {
    if (form.value['rpassword'] !== form.value['password']) {
      this.error['password'] = 'password mismatch';
    } else {
      const user: NewUser = {
        firstname : form.value['firstname'],
        lastname : form.value['lastname'],
        email: form.value['email'],
        password: form.value['password']
      };
      this._userService.save(user).subscribe((data) => {
        console.log(data);
      });
    }
  }

}
