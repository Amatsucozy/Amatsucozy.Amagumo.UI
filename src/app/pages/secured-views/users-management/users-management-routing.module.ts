import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersManagementComponent} from "./users-management.component";
import {CompleteUserComponent} from "./complete-user/complete-user.component";

export const routes: Routes = [
  {
    path: '',
    component: UsersManagementComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'complete-user'
      },
      {
        path: 'complete-user',
        component: CompleteUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule {
}
