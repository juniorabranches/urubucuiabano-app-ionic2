declare var window: any;

export class OneSignal {
  static init() {
      window["plugins"].OneSignal
        .startInit("//CONFIG ONE SIGNAL", "//APP ID ONESIGNAL")
      	.handleNotificationOpened((jsonData) => {
          //
        })
        .endInit();
  }

}
