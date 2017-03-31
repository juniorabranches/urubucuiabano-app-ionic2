import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-proximosJogos',
  templateUrl: 'proximosJogos.html'
})
export class ProximosJogos {

  dados:any;
  jogos: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
    this.jogos = this.dados.jogos;
  }

  getScoreDisplayBadgeClass1(games){
    return  games.team1score > games.team2score ? 'vitoria' :  games.team1score < games.team2score ? 'derrota' : 'empate';
  }

  getScoreDisplayBadgeClass2(games){
    return games.team2score > games.team1score ? 'vitoria' : games.team2score < games.team1score ? 'derrota' : 'empate';
  }

}
