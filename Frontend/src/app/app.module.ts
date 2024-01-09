import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GetdeveloperComponent } from './getdeveloper/getdeveloper.component';
import { UpdatedeveloperComponent } from './updatedeveloper/updatedeveloper.component';
import { AddDeveloperComponent } from './add-developer/add-developer.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GetdeveloperComponent,
    UpdatedeveloperComponent,
    AddDeveloperComponent,
    DeveloperDetailsComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
