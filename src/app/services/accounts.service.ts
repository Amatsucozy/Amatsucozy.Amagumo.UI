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
    return this.httpClient.get<IAccountModel>(`${environment.apis.system}${Constants.routeTypes.secured}/api/Users`);
  }

  createAccount(): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.apis.system}${Constants.routeTypes.secured}/api/Users`, {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@amagumo.co.jp'
    });
  }
}
