import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public name;
  public last_name;
  public email;
  public pass;
  public cpass;
  public error;


  constructor( 
    private connectS: ConnectService,

  ) { }

  ngOnInit() {
  }

  
  registrar()
  {

    let param = {
      'name':this.name,
      'last_name':this.name,
      'email':this.email,
      'pass':this.pass
    };

    
    if(this.pass != this.cpass)
    {
      this.error = 'No coinciden las contraseñas.';
    
    }else{

      this.connectS.get('register', param).subscribe( d => {

        console.log(d['results']);

    if(d['results'] == true)
      {
          this.error = "Su solicitud fue enviada con éxito, verifique su email para validar el usuario.";
      }else{

        this.error = "Error al enviar la solicitud.";
      }
        
      });

    }

   

  }

}
