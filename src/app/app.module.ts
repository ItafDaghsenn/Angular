import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { HeaderComponent } from './header/header.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    NotfoundComponent,
    ShowstudentComponent,
    HeaderComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
