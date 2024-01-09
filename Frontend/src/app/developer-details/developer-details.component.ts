import { Component, OnInit } from '@angular/core';
import { DeveloperServiceService } from '../service/developer-service.service';
@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {
  employee:any=[]
  constructor(private developerService :DeveloperServiceService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.developerService.getAllEmployee().subscribe((res)=>{
      console.log(res);
      this.employee=res
    })
  }

}
