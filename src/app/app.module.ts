import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';

import { FormInputComponent } from './form-input/form-input.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [BrowserModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ChildComponent,
    FormInputComponent,
    HeaderComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
