import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompleteUserComponent} from './complete-user/complete-user.component';
import {UsersManagementComponent} from './users-management.component';
import {RouterOutlet} from "@angular/router";
import {UsersManagementRoutingModule} from "./users-management-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FileUploaderModule} from "../../../shared/file-uploader/file-uploader.module";

@NgModule({
  declarations: [
    CompleteUserComponent,
    UsersManagementComponent
  ],
  imports: [
    UsersManagementRoutingModule,
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FileUploaderModule
  ]
})
export class UsersManagementModule {
}
