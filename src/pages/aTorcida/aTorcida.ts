import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-aTorcida',
  templateUrl: 'aTorcida.html'
})
export class ATorcida {

  dados:any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
  }

}
