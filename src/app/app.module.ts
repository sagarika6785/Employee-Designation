import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
