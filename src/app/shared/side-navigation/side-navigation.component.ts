import {Component} from '@angular/core';
import {IUserDto} from "../../models/users/user.dto";
import {Store} from "@ngrx/store";
import {selectUser, Test} from "../../states/user/user.selectors";
import {INavigationItem} from "./side-navigation.models";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  user: IUserDto | undefined;
  navigationItems: INavigationItem[] = [
    {
      displayName: 'Financial management',
      isExternal: false,
      route: '/secured-views/financial-management'
    },
    {
      displayName: 'Users management',
      isExternal: false,
      route: '/secured-views/users-management'
    },
    {
      displayName: 'Players management',
      isExternal: false,
      route: '/secured-views/players-management'
    },
    {
      displayName: 'Fixtures management',
      isExternal: false,
      route: '/secured-views/fixtures-management'
    }
  ]

  constructor(private store: Store<Test>) {
    this.store.select(selectUser)
      .subscribe({
        next: (user) => {
          this.user = user;
        }
      });
  }
}
