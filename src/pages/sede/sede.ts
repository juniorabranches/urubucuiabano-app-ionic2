import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-sede',
  templateUrl: 'sede.html'
})
export class Sede {

  dados:any;
  nome;
  mensagem;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
  }

  clearCampos(){
    this.mensagem = '';
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


  sendMensagem(nome, mensagem){
    this.fire.saveMensagem(nome,mensagem);
    this.fire.toastMessage('SRN! Sua mensagem foi enviada. Obrigado', 3000);
    this.clearCampos();
  }
}
