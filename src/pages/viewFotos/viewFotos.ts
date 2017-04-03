import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';
import { Contato } from '../pages';

@Component({
  selector: 'page-viewFotos',
  templateUrl: 'viewFotos.html'
})
export class ViewFotos {

  foto: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    //this.viewCtrl.setBackButtonText('');
    this.foto = params.get('foto');
  }

  backButton(){
    this.viewCtrl.dismiss();    
  }

}
