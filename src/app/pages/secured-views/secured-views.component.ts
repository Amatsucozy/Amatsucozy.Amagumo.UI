import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {AuthService} from "@auth0/auth0-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {usersApiActions} from "../../states/user/user.actions";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.usersService.getUser()
      .then((user) => {
        console.log(user);
        this.store.dispatch(usersApiActions.loadUserInfo({user}));
      })
      .catch((error) => {
        if (error.status === 404) {
          this.usersService.requireUserInfo();
          this.router.navigate(['./users-management/complete-user'], {relativeTo: activatedRoute});
        }
      });
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
