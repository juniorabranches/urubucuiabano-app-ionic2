import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})
export class Contato {

  dados:any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
  }

  openApp(url: string) {
    let browser = new InAppBrowser(url, '_system');
  }
}
