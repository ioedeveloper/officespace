import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterContentChecked {

  public loading = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    // viewChild is set after the view has been initialized
    this.loading = false;
  }

}
