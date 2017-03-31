import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html'
})
export class Fotos {

  dados:any;
  fotos: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
    this.fotos = this.dados.fotos;
  }

}
