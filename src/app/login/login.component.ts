import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  public loading = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    // viewChild is set after the view has been initialized
    this.loading = false;
  }

}
