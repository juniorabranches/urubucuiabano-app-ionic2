import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import _ from 'lodash';
import { FirebaseService } from '../../providers/providers';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class Chat {

  userName:string;
  userPhoto:any;
  date:string;
  sugestion:string;
  suggestions = [];
  numberMsgs;
  allSuggestions: any;
  allMsgs;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public fire: FirebaseService, public params: NavParams, public toast: ToastController, public loading: LoadingController) {
    this.viewCtrl.setBackButtonText('');
    this.userName = this.params.get('name');
    this.userPhoto = this.params.get('imagem');
    this.numberMsgs = 7;
    this.sugestion = '';
    this.init();
  }

  sendMessage(user, photo, date, sugestion){
    if (user === undefined) {
      let toast = this.toast.create({
        message: 'Por favor, informe seu nome',
        duration: 5000,
        position: 'bottom'
      });
      toast.present();
    } else if (sugestion === undefined) {
      let toast = this.toast.create({
        message: 'Por favor, informe seu comentário',
        duration: 5000,
        position: 'bottom'
      });
      toast.present();
      close;
    }
      else if (sugestion === '') {
      let toast = this.toast.create({
        message: 'Por favor, informe seu comentário',
        duration: 5000,
        position: 'bottom'
      });
      toast.present();
      close;
    }
    else {
      this.fire.saveSuggestions(user, photo, this.fire.user.date, sugestion);
      this.sugestion = '';
      this.init();
    }
  }


  viewDidLoad(){
      this.init();
  }
  viewDidEnter(){
      this.init();
  }
  viewWillEnter(){
      this.init();
  }
  ionViewDidLoad(){
      this.init();
  }
  ionViewDidEnter(){
      this.init();
  }
  ionViewWillEnter(){
      this.init();
  }

  init(){
    this.sugestion = '';
    setInterval(() => {
      this.getSuggestions();
    }, 1000);
  }

  getSuggestions(){
    this.fire.getSuggestions().then(data => {
      this.suggestions = [];
      this.allSuggestions = data
      this.allSuggestions = _.orderBy(this.allSuggestions, ['date', 'hour','minutes','seconds'], ['desc', 'desc','desc','desc']);

      for (const key of Object.keys(this.allSuggestions)) {

              this.suggestions.push({ date: this.allSuggestions[key].date,
                                      email: this.allSuggestions[key].email,
                                      photo: this.allSuggestions[key].photo,
                                      sugestion:this.allSuggestions[key].sugestion,
                                      user: this.allSuggestions[key].user,
                                      hour: this.allSuggestions[key].hour,
                                      minutes: this.allSuggestions[key].minutes,
                                      seconds: this.allSuggestions[key].seconds,});
      }

      this.allMsgs = this.suggestions.length;
    });
  }

  moreMessages(numberMsgs){
    this.numberMsgs = this.numberMsgs + numberMsgs;
    this.init();
  }

}
