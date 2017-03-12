import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import { ServicesComponent }   from './services.app.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule],
  declarations: [ ServicesComponent],
  bootstrap:    [ ServicesComponent]
})
export class AppModule { }
