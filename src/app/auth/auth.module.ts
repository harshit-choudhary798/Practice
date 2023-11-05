import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IdModule } from '../id/id.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IdModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent 
  ]
})
export class AuthModule { }
