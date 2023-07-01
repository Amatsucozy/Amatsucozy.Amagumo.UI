import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./user/user.reducers";
import {IApplicationStates} from "./application-states.models";


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot<IApplicationStates>(
      {
        user: userReducer
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
        }
      }
    )
  ],
  exports: [StoreModule]
})
export class ApplicationStatesModule {
}
