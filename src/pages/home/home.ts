import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';
import { ATorcida, Brindes, Fotos, Midia, ProximosJogos, Contato } from '../pages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menus:any;

  constructor(public navCtrl: NavController, public fire: FirebaseService) {
    this.fire.getMenus().then(data => {
      this.menus = data;
    });
  }

  openPage(page, dadosPag) {
    console.log(page);
    if (page === 'aTorcida') {
      this.navCtrl.push(ATorcida, {dados: dadosPag});
    } else if (page === 'jogosFlamengo') {
      this.navCtrl.push(ProximosJogos, {dados: dadosPag});
    } else if (page === 'brindes') {
      this.navCtrl.push(Brindes, {dados: dadosPag});
    } else if (page === 'fotos') {
      this.navCtrl.push(Fotos, {dados: dadosPag});
    } else if (page === 'midia') {
      this.navCtrl.push(Midia, {dados: dadosPag});
    } else if (page === 'contato') {
      this.navCtrl.push(Contato, {dados: dadosPag});
    }

  }

}
