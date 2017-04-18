import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';
import { ClassificacaoDetalhes } from '../pages';


@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html'
})
export class Classificacao {

  dados:any;
  classificacao: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
    this.classificacao = this.dados.classificacao;
  }

  itemTapped($event, tourney){
    this.navCtrl.push(ClassificacaoDetalhes, {torneio: tourney});
  }

}
