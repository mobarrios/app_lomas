import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'saber', loadChildren: './saber/saber.module#SaberPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'consultas', loadChildren: './consultas/consultas.module#ConsultasPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'direccion', loadChildren: './direccion/direccion.module#DireccionPageModule' },
  { path: 'hacer', loadChildren: './hacer/hacer.module#HacerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
