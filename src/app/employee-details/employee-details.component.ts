import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public EmpID:any;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.EmpID= id;
  }

  constructor(private route:ActivatedRoute){}
}
