import {NgModule} from '@angular/core';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../environments/environment";

@NgModule({
  imports: [AuthModule.forRoot({
    domain: environment.auth0Domain,
    clientId: environment.auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: environment.auth0Audience,
      scope: 'openid email profile read:current_user write:current_user'
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://localhost:5443/Secured/api/*',
          tokenOptions: {
            authorizationParams: {
              audience: environment.auth0Audience,
              scope: 'openid email profile read:current_user write:current_user'
            }
          }
        }
      ]
    }
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
