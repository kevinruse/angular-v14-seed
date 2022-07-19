import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from "./header/header.component";

import { FormInputComponent } from './form-input/form-input.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './directives/status.directive';

@NgModule({
     imports: [ BrowserModule, FontAwesomeModule ],
     declarations: [ AppComponent, 
                     ChildComponent, 
                     FormInputComponent,
                     HeaderComponent,
                     StatusComponent,
                     StatusDirective ],
     bootstrap: [ AppComponent ]
})

export class AppModule {}