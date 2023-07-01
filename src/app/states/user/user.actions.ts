import {createActionGroup, props} from "@ngrx/store";
import {IUserDto} from "../../models/users/user.dto";

export const usersApiActions = createActionGroup({
  source: 'Users API actions',
  events: {
    'Load user info': props<{ user: IUserDto }>(),
  }
});

export const usersActions = createActionGroup({
  source: 'Users actions',
  events: {
    'Update user info': props<{ user: IUserDto }>(),
  }
});
