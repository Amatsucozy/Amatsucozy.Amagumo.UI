import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {IUserDto} from "../models/users/user.dto";
import {environment} from "../../environments/environment";

@Injectable()
export class UsersService {
  private requireUserComplete: boolean;

  constructor(private httpClient: HttpClient) {
    this.requireUserComplete = false;
  }

  getUserInfoStatus(): boolean {
    return this.requireUserComplete;
  }

  requireUserInfo(): void {
    this.requireUserComplete = true;
  }

  completeUserInfo(): void {
    this.requireUserComplete = false;
  }

  getUser(): Promise<IUserDto> {
    return firstValueFrom(this.httpClient.get<IUserDto>(`${environment.apis.system}api/Users`));
  }

  createUser(user: IUserDto): Promise<boolean> {
    return firstValueFrom(this.httpClient.post<boolean>(`${environment.apis.system}api/Users`, user));
  }
}
