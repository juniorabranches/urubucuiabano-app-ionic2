import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseService, FacebookLogin } from '../../providers/providers';
import { ATorcida, Brindes, Fotos, Midia, ProximosJogos, Contato, Chat, Sede } from '../pages';


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
    } else if (page === 'sede') {
      this.navCtrl.push(Sede, {dados: dadosPag});
    } else if (page === 'chat') {
        FacebookLogin.login(response => {
            this.fire.login(response.accessToken, () => {
              console.log('ok');
              this.navCtrl.push(Chat,  {imagem: this.fire.user.photo,
                                        name: this.fire.user.name,
                                        id : this.fire.user.id
                                        });
            }, error => {
              alert("Para acessar o Chat da TUC, entre com o Facebook");
            })


        }, error => {
          alert("Para acessar o Chat da TUC, entre com o Facebook");
        });


    }

  }

}
