import {IUserDto} from "../../models/users/user.dto";

export interface Test {
  user: IUserDto;
}

export const selectUser = (state: Test): IUserDto => state['user'];
