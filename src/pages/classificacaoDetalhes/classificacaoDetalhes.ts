import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-classificacaoDetalhes',
  templateUrl: 'classificacaoDetalhes.html'
})
export class ClassificacaoDetalhes {

  dados:any;
  games:any;
  standings:any;
  classificacao: any;
  isLibertadores:boolean;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('torneio');
    this.games = this.dados.games;
    this.standings = this.dados.standings;    
    this.isLibertadores = false;
    if (this.dados.tournamentName == 'Libertadores') {
      this.isLibertadores = true;
    }

  }

}
