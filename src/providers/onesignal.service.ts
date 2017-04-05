declare var window: any;

export class OneSignal {
  static init() {
      window["plugins"].OneSignal
        .startInit("CONFIG KEY ONESIGNAL", "APP ID ONE SIGNAL")
      	.handleNotificationOpened((jsonData) => {
          //
        })
        .endInit();
  }

}
