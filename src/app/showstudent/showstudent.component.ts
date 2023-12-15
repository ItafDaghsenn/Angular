import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {
  id: number = 0;
  student: Student | undefined;
  studentlist:Student[]=[  
    {  
      "id": 1,  
      "name": "Jack",  
      "email": "jack@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 2,  
      "name": "Peter",  
      "email": "peter@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 3,  
      "name": "Mary",  
      "email": "mary@gmail.com",  
      "gender": "female"  
    },  
    {  
      "id": 4,  
      "name": "Smith",  
      "email": "smith@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 5,  
      "name": "John",  
      "email": "john@gmail.com",  
      "gender": "male"  
    }  
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Fetching 'id' from the route parameter
      this.student = this.studentlist.find(student => student.id === this.id);
    });
  }
}
