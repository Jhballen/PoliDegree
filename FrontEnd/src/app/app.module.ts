import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }