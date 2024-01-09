import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeveloperServiceService } from '../service/developer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup
  constructor(private developerService : DeveloperServiceService, 
    private fb:FormBuilder, private router:Router ){}

    ngOnInit()
  {
    this.registerForm=this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required,Validators.email],
      password:[null,Validators.required],
      confirmedpassword:[null,Validators.required],
    })
  }
  submitForm()
  {
    console.log(this.registerForm.value);
    this.developerService.register(this.registerForm.value).subscribe((res)=>{
      if(res!=null)
      {
        alert("Successfully Signed Up for"+res.name)
      }
    })
  }
  registration(){
    console.log(this.registerForm.value)
    this.developerService.login(this.registerForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl("login")
    })
  }

  
}
