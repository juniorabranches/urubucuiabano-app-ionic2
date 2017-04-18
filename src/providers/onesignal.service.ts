declare var window: any;

export class OneSignal {
  static init() {
      window["plugins"].OneSignal
        .startInit("{{KEY ONE SIGNAL}}", "{{APP ID ONE SIGNAL}}")
      	.handleNotificationOpened((jsonData) => {
          //
        })
        .endInit();
  }

}
