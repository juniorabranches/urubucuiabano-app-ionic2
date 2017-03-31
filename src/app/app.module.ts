import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ATorcida, Brindes, Fotos, Midia, ProximosJogos, Contato } from '../pages/pages';
import {FirebaseService, OneSignal } from '../providers/providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage, ATorcida, Brindes, Fotos, Midia, ProximosJogos, Contato
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ATorcida, Brindes, Fotos, Midia, ProximosJogos, Contato
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService,
    OneSignal
  ]
})
export class AppModule {}
