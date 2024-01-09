import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperServiceService } from '../service/developer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(private developerService : DeveloperServiceService, 
    private fb:FormBuilder, private router:Router ){}

    ngOnInit()
  {
    this.loginForm=this.fb.group({
    
      email:[null,Validators.required,Validators.email],
      password:[null,Validators.required],
     
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.developerService.login(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl("userside")
    })
  }

}
