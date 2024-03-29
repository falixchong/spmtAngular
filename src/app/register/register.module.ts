import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [ RegisterComponent ],
	imports: [ CommonModule, RegisterRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule ]
})
export class RegisterModule {}
