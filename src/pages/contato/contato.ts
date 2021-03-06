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
  telefone;
  nome;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
  }

  clearCampos(){
    this.telefone = '';
    this.nome = '';
  }

  viewDidLoad(){
    this.clearCampos();
  }
  viewDidEnter(){
    this.clearCampos();
  }
  viewWillEnter(){
    this.clearCampos();
  }
  ionViewDidLoad(){
    this.clearCampos();
  }
  ionViewDidEnter(){
    this.clearCampos();
  }
  ionViewWillEnter(){
    this.clearCampos();
  }

  openApp(url: string) {
    let browser = new InAppBrowser(url, '_system');
  }


  sendTel(nome, tel){
    this.fire.saveTel(nome,tel);
    this.fire.toastMessage('Solicitação enviada. Em breve você será adicionado no Whatsapp da TUC', 3000);
    this.clearCampos();
  }
}
