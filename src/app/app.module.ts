import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from "./header/header.component";

import { FormInputComponent } from './form-input/form-input.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
     imports: [ BrowserModule, FontAwesomeModule ],
     declarations: [ AppComponent, 
                     ChildComponent, 
                     FormInputComponent,
                     HeaderComponent ],
     bootstrap: [ AppComponent ]
})

export class AppModule {}