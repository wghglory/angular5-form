import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './../models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  languages = ['English', 'Spanish', 'Other'];

  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value) {
    if (value === 'default') this.hasPrimaryLanguageError = true;
    else this.hasPrimaryLanguageError = false;
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  save(employeeForm: NgForm) {
    //post request
    console.log(employeeForm);
    console.log('saved: ' + JSON.stringify(employeeForm.value));
  }

  ngOnInit() {}
}
