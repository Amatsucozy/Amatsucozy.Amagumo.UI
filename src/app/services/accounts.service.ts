import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccountModel} from "../models/accounts/account.model";
import {environment} from "../../environments/environment";
import {Constants} from "../constants/constants";

@Injectable()
export class AccountsService {

  constructor(private httpClient: HttpClient) {
  }

  getAccount(): Observable<IAccountModel> {
    return this.httpClient.get<IAccountModel>(`${environment.apis.system}${Constants.routeTypes.secured}/api/Users?id=5EF9EDE3-9299-4161-AE78-6F89EE2750D2&auth0id=5EF9EDE3-9299-4161-AE78-6F89EE2750D2`);
  }
}
