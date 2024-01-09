import { Component, OnInit } from '@angular/core';
import { DeveloperServiceService } from '../service/developer-service.service';
@Component({
  selector: 'app-getdeveloper',
  templateUrl: './getdeveloper.component.html',
  styleUrls: ['./getdeveloper.component.css']
})
export class GetdeveloperComponent implements OnInit {

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

  deleteEmployee(id:any){
    // console.log(id);
    this.developerService.deleteEmployee(id).subscribe((res)=>{
      this.getAllEmployee(); 
    })
  }

}
