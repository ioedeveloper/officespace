import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loading = false;
    }, 3000);

  }

}
