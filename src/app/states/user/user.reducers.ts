import {IUserDto} from "../../models/users/user.dto";
import {createReducer, on} from "@ngrx/store";
import {usersApiActions} from "./user.actions";

export const initialState: IUserDto = {} as IUserDto;

export const userReducer = createReducer(
  initialState,
  on(usersApiActions.loadUserInfo, (state, {user}) => user),
);
