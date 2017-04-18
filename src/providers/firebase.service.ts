import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  AlertController, ToastController } from 'ionic-angular';

import firebase from 'firebase';

@Injectable()
export class FirebaseService {

  user: any = {};
  public baseUrl = 'URL FIREBASE';

  constructor(public http: Http, private toast: ToastController) {
    var config = {
	{{CONFIG FIREBASE}}
	};
    firebase.initializeApp(config);
  }

  toastMessage(error, time)
  {
    let toast = this.toast.create({
      message: error,
      duration: time,
      position: 'bottom'
    });
    toast.present();
  }

  checkNetwork(): boolean {
    return navigator.onLine
  }  

  public getMenus(){
    return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/menus.json`)
            .subscribe(res => resolve(res.json()));
    });
  }

  login(token: string, successCallback, errorCallback) {
    let credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential).then(response => {
      this.setUser(token, response.providerData[0]);
      //this.vaitimeApi.setUser(token, response.providerData[0]);
      successCallback();

    }, error => {
      errorCallback(error);
    })
  }

  private setUser(token: string, authData: any) {
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.email = authData.email;

    var date = new Date();
    var month = '';
    if (date.getMonth() === 0) {
        month = '01';
    } else if (date.getMonth() === 1) {
        month = '02';
    } else if (date.getMonth() === 2) {
        month = '03';
    } else if (date.getMonth() === 3) {
        month = '04';
    } else if (date.getMonth() === 4) {
        month = '05';
    } else if (date.getMonth() === 5) {
        month = '06';
    } else if (date.getMonth() === 6) {
        month = '07';
    } else if (date.getMonth() === 7) {
        month = '08';
    } else if (date.getMonth() === 8) {
        month = '09';
    } else if (date.getMonth() === 9) {
        month = '10';
    } else if (date.getMonth() === 10) {
        month = '11';
    } else if (date.getMonth() === 11) {
        month = '12';
    }
    this.user.date = date.getDate() + "/" + month + "/" + date.getFullYear();
    this.user.dateClean = date.getDate() + month + date.getFullYear();
    this.saveUser();
  }

  private saveUser() {
    firebase.database().ref('users').child(this.user.name+' - '+this.user.id).set({
      name: this.user.name,
      date: this.user.date,
      email: this.user.email,
      photo: this.user.photo,
      id: this.user.id
      //token: this.user.token
    });
  }

  saveSuggestions(user, photo, date, sugestion) {
    var date1 = new Date();
    //console.log(user, photo, email, date, sugestion);
    firebase.database().ref('suggestions').child(user +' - '+ date1 + ' - ' +date1.getHours()+':'+date1.getMinutes()+':'+date1.getSeconds()).set({
      user: user,
      photo: photo,
      date: date,
      sugestion: sugestion,
      hour: date1.getHours(),
      minutes: date1.getMinutes(),
      seconds: date1.getSeconds()
    });
  }

  getSuggestions() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/suggestions.json`)
          .subscribe(res => resolve(res.json()));
          });
  }

  saveTel(nome, whats){
    firebase.database().ref('whatsapp').child(nome +' - '+ whats).set({
      nome: nome,
      whats: whats
    });
  }

  saveMensagem(nome, mensagem){
    var date1 = new Date();
    firebase.database().ref('mensagem').child(nome +' - '+ date1).set({
      nome: nome,
      mensagem: mensagem
    });
  }

}
