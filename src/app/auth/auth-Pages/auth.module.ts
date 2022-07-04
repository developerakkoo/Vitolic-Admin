import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';


import { RegistrationComponent } from './registration/registration.component';
import { AutotabDirective } from 'src/app/directive/autotab.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AutotabDirective,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

    AuthRoutingModule,

    MatInputModule,
    // PasswordStrengthMeterModule.forRoot()
  ],
  providers: [],
})
export class AuthModule {}
