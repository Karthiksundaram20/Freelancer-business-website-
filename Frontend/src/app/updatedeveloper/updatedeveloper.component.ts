import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperServiceService } from '../service/developer-service.service';

@Component({
  selector: 'app-updatedeveloper',
  templateUrl: './updatedeveloper.component.html',
  styleUrls: ['./updatedeveloper.component.css']
})
export class UpdatedeveloperComponent{
  updateForm!: FormGroup
  id: number = this.activatedRoute.snapshot.params['id'];
  constructor(private activatedRoute: ActivatedRoute, private developerService: DeveloperServiceService,
     private fb: FormBuilder,private router:Router) { }

  ngOnInit(){
    this.getEmployeeByid();
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required]
    })
    this.getEmployeeByid();
  }
  getEmployeeByid() {
    this.developerService.getEmployeeById(this.id).subscribe((res) => {
      console.log(res);
      this.updateForm.patchValue(res)
    })
  }
  updateEmployee() {
    this.developerService.updateEmployee(this.id, this.updateForm.value).subscribe((res) => {
    console.log(res);

    this.router.navigateByUrl("/getAll");

    })
  }
}
