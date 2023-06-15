import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-anonymous-views',
  templateUrl: './anonymous-views.component.html',
  styleUrls: ['./anonymous-views.component.scss']
})
export class AnonymousViewsComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = this.authService.isAuthenticated$
      .pipe(
        take(1)
      );
  }

  login() {
    this.authService.loginWithRedirect();
  }

  toSecuredView() {
    this.router.navigate(['/secured-views']);
  }
}
