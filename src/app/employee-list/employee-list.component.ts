import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  MyEmployees=[

    {"id":1,"name":"Amit"},

    
    {"id":2,"name":"Trisha"},
    
    // {"id":1,"name":"Amit"},
    
    // {"id":1,"name":"Amit"},
    
    // {"id":1,"name":"Amit"},
    
    {"id":3,"name":"prakash"},
    
  ]
  constructor(private router :Router){}
  EmpClick(employee:any){
     this.router.navigate(['/employees' ,employee.id]);
  }

}
