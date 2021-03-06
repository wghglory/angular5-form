import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './../models/employee';

import { FormPosterService } from './../services/form-poster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private formPosterService: FormPosterService) {
    this.formPosterService
      .getLanguages()
      .subscribe(
        (data) => (this.languages = data.languages),
        (err) => console.log('get error: ', err)
      );
  }

  submitForm(form: NgForm) {
    // validate form
    //post request
    // console.log(form);
    // console.log('saved: ' + JSON.stringify(form.value));

    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) return;

    this.formPosterService
      .postEmployeeForm(this.model)
      .subscribe((data) => console.log('success: ', data), (err) => console.log('error: ', err));
  }

  languages = [];

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

  ngOnInit() {}
}
