import {NgModule} from '@angular/core';
import {AuthModule} from "@auth0/auth0-angular";

@NgModule({
  imports: [AuthModule.forRoot({
    domain: 'amagumo-dev.jp.auth0.com',
    clientId: 'DORzLmRtieenTGQM02oNFFeqlb6JAbQw',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://amagumo-dev.jp.auth0.com/api/v2/',
      scope: 'read:current_user'
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://amagumo-dev.jp.auth0.com/api/v2/*',
          tokenOptions: {
            authorizationParams: {
              audience: 'https://amagumo-dev.jp.auth0.com/api/v2/',
              scope: 'read:current_user'
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
