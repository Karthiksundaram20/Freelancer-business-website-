import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeveloperComponent } from './add-developer/add-developer.component';
import { GetdeveloperComponent } from './getdeveloper/getdeveloper.component';
import { UpdatedeveloperComponent } from './updatedeveloper/updatedeveloper.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path:'userside',component:AddDeveloperComponent},
  {path:'getAll',component:GetdeveloperComponent},
  {path:'employee/:id',component:UpdatedeveloperComponent},
  {path:'teamdetail',component:DeveloperDetailsComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path:'about',component:AboutComponent},
  { path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
