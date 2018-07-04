import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loading = false;
    }, 5000);

  }

}
