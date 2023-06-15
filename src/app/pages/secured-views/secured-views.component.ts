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
    this.accountsService.getAccount().subscribe();
    this.accountsService.getAccountPublic().subscribe();
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
