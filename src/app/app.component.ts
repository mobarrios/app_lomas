import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mapa',
      url: '/mapa',
      icon: 'map'
    },
    {
      title: 'Mi Municipio',
      url: '/list',
      icon: 'business'
    },
    {
      title: '911',
      url: '/list',
      icon: 'warning'
    },
    {
      title: 'Consultas',
      url: '/consultas',
      icon: 'chatbubbles'
    },
    {
      title: 'Ver Mas!',
      url: '/saber',
      icon: 'help-circle'
    },
    {
      title: 'Salir',
      url: '/list',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
     private callNumber: CallNumber,
     private storage: Storage,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.storage.get('user_id').then((val) => {
        if(!val)
          this.router.navigateByUrl('login');
        else
          this.router.navigateByUrl('home');

      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  municipio() {
    window.open('http://www.estebanecheverria.gov.ar', '_blank');
  }

  call() {
    this.callNumber.callNumber('#911', true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  logout()
  {
      this.storage.remove('user_id');
      this.router.navigateByUrl('login');
  
  }

  
}
