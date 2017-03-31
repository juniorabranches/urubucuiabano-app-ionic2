import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';

@Injectable()
export class FirebaseService {

  user: any = {};
  public baseUrl = '//URL DO FIREBASE';

  constructor(public http: Http) {
    var config = {
	//CONFIGURACAO DO FIREBASE
    };
    firebase.initializeApp(config);
  }

  public getMenus(){
    return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/menus.json`)
            .subscribe(res => resolve(res.json()));
    });
  }

}
