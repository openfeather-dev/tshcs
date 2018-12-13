// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  port:4200,
  host:'localhost',
  radiusInMiles:100,
  accountTypes: [{label:'Select Type', value:''},{label:'Checking', value:'Checking'},{label:'Saving', value:'Saving'}],
  resourceServerUrl: 'http://localhost:8090/',
  availabilityUrl: 'availability/',
  userUrl: 'user/',
  customerUrl:'customer/',
  userAvailabilities: 'useravailability/',
  myshiftUrl: 'shifts/',
  jobseekerUrl: 'job/apply',
  shiftConfigurationUrl: 'shiftconfiguration/',
  custaddShift:'addshift/',
  signupUrl:'https://dev-581945.oktapreview.com/signin/register',
  zipcodeUrl:'zipcode/',
  cellProviderUrl:'provider/',
  usastatesUrl:'usastates/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
