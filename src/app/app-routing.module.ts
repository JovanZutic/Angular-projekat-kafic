import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
//import { LoginPageComponent } from './components/login-page/login-page.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { LoginComponent } from './components/login/login.component';
import { DrinkGalerryComponent } from './components/gallery/drink-galerry/drink-galerry.component';
import { KorpaComponent } from './components/korpa/korpa.component';
import { DayVibeGalleryComponent } from './components/gallery/day-vibe-gallery/day-vibe-gallery.component';
import { NightLifeGalleryComponent } from './components/gallery/night-life-gallery/night-life-gallery.component';
import { SankerFrontComponent } from './components/sanker-front/sanker-front.component';
import { MenadzerFrontComponent } from './components/menadzer-front/menadzer-front.component';
import { NarudzbineComponent } from './components/menadzer-front/narudzbine/narudzbine.component';
import { LagerComponent } from './components/menadzer-front/lager/lager.component';
import { NovoPiceComponent } from './components/menadzer-front/novo-pice/novo-pice.component';
import { PromenaCeneComponent } from './components/menadzer-front/promena-cene/promena-cene.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
  }, 
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'drink-menu', component: DrinkMenuComponent
  },
  {
    path: 'gallery/drink-galerry', component: DrinkGalerryComponent
  },
  {
    path: 'gallery/day-vibe-galerry', component: DayVibeGalleryComponent
  },
  {
    path: 'gallery/night-life-galerry', component: NightLifeGalleryComponent
  },
  {
    path: 'korpa', component: KorpaComponent
  },
  {
    path: 'sanker-front', component: SankerFrontComponent, canActivate:[AuthGuard]
  },
  {
    path: 'menadzer-front', component: MenadzerFrontComponent, canActivate:[AuthGuard]
  },
  {
    path: 'menadzer-front/narudzbine', component: NarudzbineComponent, canActivate:[AuthGuard]
  },
  {
    path: 'menadzer-front/lager', component: LagerComponent, canActivate:[AuthGuard]
  },
  {
    path: 'menadzer-front/novo-pice', component: NovoPiceComponent, canActivate:[AuthGuard]
  },
  {
    path: 'menadzer-front/promena-cene', component: PromenaCeneComponent, canActivate:[AuthGuard]
  },
  {
    path: '' , redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
