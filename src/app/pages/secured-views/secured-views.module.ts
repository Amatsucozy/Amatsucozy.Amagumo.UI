import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecuredViewsComponent} from './secured-views.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SecuredViewsRoutingModule} from "./secured-views-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {UsersService} from "../../services/users.service";
import {FilePondModule} from "ngx-filepond";
import {SideNavigationModule} from "../../shared/side-navigation/side-navigation.module";


@NgModule({
  declarations: [
    SecuredViewsComponent
  ],
    imports: [
        SecuredViewsRoutingModule,
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        SideNavigationModule
    ],
  providers: [
    UsersService
  ]
})
export class SecuredViewsModule {
}
