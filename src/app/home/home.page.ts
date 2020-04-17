import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(    
    private router: Router,
    private callNumber: CallNumber

    ) {}

  consultas() {
    this.router.navigate(['/consultas']);
  }

  goToMapa() {
    this.router.navigate(['/mapa']);
  }

  saber() {
    this.router.navigate(['/saber']);
  }

  list() {
    this.router.navigate(['/list']);
  }



  municipio() {
    window.open('http://www.estebanecheverria.gov.ar', '_blank');
  }

  call() {
    this.callNumber.callNumber('#911', true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  direccion() {
    this.router.navigate(['/direccion']);
  }

  hacer() {
    this.router.navigate(['/hacer']);
  }
}
