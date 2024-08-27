import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  public selectedID:any;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{

      let id = params.get('id');
      this.selectedID = id;
    });
  }

  MyEmployees=[

    {"id":1,"name":"Amit"},

    
    {"id":2,"name":"Trisha"},
    
    // {"id":1,"name":"Amit"},
    
    // {"id":1,"name":"Amit"},
    
    // {"id":1,"name":"Amit"},
    
    {"id":3,"name":"prakash"},
    
  ]
  constructor(private router :Router,private route:ActivatedRoute){}
  EmpClick(employee:any){
     this.router.navigate(['/employees' ,employee.id,employee.name]);
  }

  isSelected(employee:any){
    return parseInt( employee.id )===parseFloat( this.selectedID);
  }

}
