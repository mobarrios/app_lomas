import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  tipos : any[] = [];
  consultas : any[] = [];

  tipo;
  text;

  constructor(  private router: Router,
                private connectS: ConnectService,
                private storage: Storage
      ) {

        // this.connectS.get('getConsultasTipo',{}).subscribe(data=>{
        //   this.tipos = data['results'];
        // });

       }

  ngOnInit() {

    // this.storage.get('user_id').then((val) => {
    //   this.connectS.get('getConsultas',{'user_id': val}).subscribe(data=>{
    //     this.consultas = data['results'];
    //   });
    // });

    
  }

  enviar() {


    // this.storage.get('user_id').then((val) => {
    //   this.connectS.get('postConsulta',{ 'user_id': val, 'tipo':this.tipo, 'text':this.text }).subscribe( d =>{
    //     if( d == 'true')
    //     {
    //         this.router.navigate(['/home']);
    //     }
    //   });
    // });


  


    

    // this.connectS.get('getEscuelas').subscribe(d=>{
    //   console.log(d);
    // });
    // this.apiC.get('users',null).subscribe(d=>{
    //   console.log(d)
    // });
    
    // data.subscribe(d => 
    //     {
    //       return d;
    //     }, error => 
    //     {
    //       console.log( JSON.stringify(error));
    //   });
    //this.router.navigate(['/home']);
  }

}
