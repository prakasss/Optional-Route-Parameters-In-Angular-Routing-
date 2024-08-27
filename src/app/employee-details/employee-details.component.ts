import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public EmpID:any;
  public  EmpName:any;
  
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let name = this.route.snapshot.paramMap.get('name');
    this.EmpName= name;
    this.EmpID =id;
  }

  constructor(private route:ActivatedRoute){}
}
