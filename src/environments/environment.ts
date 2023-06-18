import {IEnvironmentModel} from "../app/models/environments/environment.model";

export const environment: IEnvironmentModel = {
  production: true,

  auth0Domain: 'amagumo-dev.jp.auth0.com',
  auth0Audience: 'AmatsucozyDEV',
  auth0ClientId: 'DORzLmRtieenTGQM02oNFFeqlb6JAbQw',
  auth0RedirectUri: 'https://localhost:4200/challenge',

  apis: {
    system: 'https://amagumo.com/security/'
  }
};
