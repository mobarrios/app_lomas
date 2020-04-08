import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user;
  public pass;
  public error = "";

  constructor(
    private storage: Storage,
    private router: Router,
    private connectS: ConnectService,
    private menu : MenuController){ 

      this.menu.enable(false);
    }

  ngOnInit() {
  }


  login() {

    this.error = "";

    let param = {
      'user':this.user,
      'pass':this.pass,
    };

    this.connectS.get('postLogin',param).subscribe(d=>{
      
      console.log(d['results']);

      if(d['results'] != false)
      {
        this.storage.set('user_id', d['results']);
        this.router.navigate(['/home']);
      
      }else{

        this.error = "Credenciales Erroneas!.";
      }
    
    });


  }
  
  register() {
    this.router.navigate(['/register']);
  }
}
