// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // apiBaseUrl: 'http://6c76a7191158.ngrok.io/',
   apiBaseUrl: 'http://34.215.79.217',
   apiPath: 'api/v1/adminRouter/',
   userapiPath: 'api/v1/userRouter/',
   s3:'api/v1/s3/',
   socetPath: 'http://3.111.168.156:5000',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
