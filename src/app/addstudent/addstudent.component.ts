import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  studentForm!: FormGroup;
  id = 0;
  stu = { id: 1, name: '', gender: '', email: '' };
email: any;
gender: any;
name: any;

  constructor(private acr: ActivatedRoute) {}

  ngOnInit(): void {
  
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }

  add(): void {
    console.log('my form' + JSON.stringify(this.studentForm.value));
    this.stu.name = this.studentForm.value.name;
    this.stu.email = this.studentForm.value.email;
    this.stu.gender = this.studentForm.value.gender;
  }
}