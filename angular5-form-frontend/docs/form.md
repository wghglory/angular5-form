# Form

* Template-driven (FormsModule)
  * ngForm
  * ngModel (2-way binding)
  * ngModelGroup
* Reactive (ReactiveFormsModule)
  * formGroup
  * formControl
  * formControlName
  * formGroupName
  * formArrayName

## Template-driven Form Code

1. `ng g c home` to create HomeComponent
1. update `app-routing.module.ts`

    ```diff
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { HomeComponent } from './home/home.component';

    const routes: Routes = [
    +  { path: '', redirectTo: 'home', pathMatch: 'full' },
    +  { path: 'home', component: HomeComponent }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule {}
    ```

1. app.module.ts add: `import { FormsModule } from '@angular/forms';`
1. home.component.ts:

    ```html
    <div class="container">
      <h3>Angular 5 Forms</h3>
      <form #employeeForm="ngForm" novalidate (ngSubmit)="save(employeeForm)">
        <div class="form-group">
          <label>First Name</label>
          <!-- <input type="text" required name="name" [(ngModel)]="name"> -->
          <input type="text" class="form-control" required name="firstName" ngModel>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" required name="lastName" ngModel>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" name="isFullTime" ngModel> Full Time Employee
          </label>
        </div>

        <label>Payment Type</label>
        <div class="radio">
          <label>
            <input type="radio" name="payType" value="w2" checked> W2
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="payType" value="1099"> 1099
          </label>
        </div>

        <div class="form-group">
          <label>Primary Language</label>
          <select class="form-control">
            <option *ngFor="let lang of languages">
              {{ lang }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Date Hired</label>
          <input type="color" class="form-control">
        </div>
        <button class="btn btn-primary" type="submit">Ok</button>
      </form>
    </div>

    <h3>Data binding</h3>
    <p>Model: {{ model | json }}</p>
    <br>
    <p>Angular: {{ employeeForm.value | json }}</p>

    <h3>Form property</h3>

    <h4>Value Changed</h4>
    <p>form.pristine（从未填写过数据，可能 focus 但就是没写过数据）: {{ employeeForm.pristine }}</p>
    <p>form.dirty: {{ employeeForm.dirty }}</p>

    <h4>Visited</h4>
    <p>form.touched（鼠标曾经 focus 过，在 blur 时候为 true）: {{ employeeForm.touched }}</p>
    <p>form.untouched: {{ employeeForm.untouched }}</p>

    <h4>Validity</h4>
    <p>form.valid（required 等通过）: {{ employeeForm.valid }}</p>
    <p>form.invalid: {{ employeeForm.invalid }}</p>
    <p>firstName.errors: {{ firstName.errors | json }}</p>
    ```