import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavigationComponent} from './side-navigation.component';
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    SideNavigationComponent
  ],
  exports: [
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SideNavigationModule {
}
