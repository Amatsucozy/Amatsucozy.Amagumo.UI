import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-authenticated-callback',
  templateUrl: './authenticated-callback.component.html',
  styleUrls: ['./authenticated-callback.component.scss']
})
export class AuthenticatedCallbackComponent {
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/anonymous-views']);
        return;
      }

      this.router.navigate(['/secured-views']);
    });
  }
}
