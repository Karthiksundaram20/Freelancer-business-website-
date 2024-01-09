import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperServiceService } from '../service/developer-service.service'; 

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {

  myForm!:FormGroup
  constructor(private developerService:DeveloperServiceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.myForm= this.fb.group({
      name:['',Validators.required],
      role:['',Validators.required],
      phone:['',Validators.required]
  })
  }

  
  addEmployee(){
    // console.log(this.myForm.value)
    this.developerService.postEmployee(this.myForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl("/getAll");
    })
  }

}
