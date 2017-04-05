import { Component, ViewChild  } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';

import { FirebaseService } from '../../providers/providers';
import { ViewFotos } from '../pages';

@Component({
  selector: 'page-elenco',
  templateUrl: 'elenco.html'
})
export class Elenco {

  greeting: string;
  testSlides: string[] = [];
  @ViewChild('mySlider') mySlider: any;
  _options:any;
  elenco:  string[] = [];
  dados:any;

  swiper:any;

  slidesOptions = { initialSlide: 0 }

  constructor(private nav: NavController, public params: NavParams) {
    this.dados = params.get('dados');
    this.elenco = this.dados.jogadores;

    this._options = {
        //pager: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        initialSlide: 0,
        loop: true,
        autoplay:1000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        speed: 2000,
        onInit:()=>{

        }
     }
  }

  onIonDrag(event){
      this.swiper = event;
      this.swiper.lockSwipes();
    }

  slideNext(){
    if(this.swiper){
      this.swiper.unlockSwipes();
    }
    this.mySlider.slideNext();
  }

  slidePrev(){
    if(this.swiper){
      this.swiper.unlockSwipes();
    }
    this.mySlider.slidePrev();
  }
}
