import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentComponent } from './student/student.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:"student/addstudent",component:AddstudentComponent},
  {path:"student/showstudent/:id",component:ShowstudentComponent},


  {path:"**",component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
