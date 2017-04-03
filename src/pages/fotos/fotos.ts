import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';
import { ViewFotos } from '../pages';

@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html'
})
export class Fotos {

  dados:any;
  fotos2006: any;
  fotos2007: any;
  fotos: Array<string>;
  grid: Array<Array<string>>; //array of arrays

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams, private modal: ModalController) {
    this.viewCtrl.setBackButtonText('');
    this.dados = params.get('dados');
    this.fotos = this.dados.fotos.fotos;
    //this.fotos2007 = this.dados.fotos.Ano2007;
    this.grid = Array(Math.ceil(this.fotos.length/2)); //MATHS!

    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.fotos.length; i+=2) { //iterate images

      this.grid[rowNum] = Array(2); //declare two elements per row

      if (this.fotos[i]) { //check file URI exists
        this.grid[rowNum][0] = this.fotos[i] //insert image
      }

      if (this.fotos[i+1]) { //repeat for the second image
        this.grid[rowNum][1] = this.fotos[i+1]
      }

      rowNum++; //go on to the next row
    }
  }


  openImage(imagem){
    console.log(imagem);
    let profileModal = this.modal.create(ViewFotos, {foto:imagem});
    profileModal.onDidDismiss(data => {
      //
    });
    profileModal.present();
  }
}
