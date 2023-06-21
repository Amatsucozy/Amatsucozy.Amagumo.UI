import {Component} from '@angular/core';
import {AccountsService} from "../../services/accounts.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent {
  constructor(private authService: AuthService, private accountsService: AccountsService) {
    this.accountsService.getAccount()
      .subscribe({
        next: (account) => {
          console.log(account);
        },
        error: (error) => {
          if (error.status === 404) {
            this.accountsService.createAccount().subscribe({
              next: (result) => {
                if (result) {
                  window.location.reload();
                }
              }
            });
          }
        }
      });
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
