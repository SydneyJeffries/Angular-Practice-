import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from '../../heros.component';
import { DashboardComponent } from '../../Dashboard'; 
import { HeroDetailsComponent } from '../../HeroDetails'
@NgModule({
exports: [ RouterModule ] // adds the routerMoudle to the app.module 
})

export class AppRoutingModule {

const routes: Routes = [                      // angular's route has two properties : 
  {path: 'heros' , component: HerosComponent}, // path is the string of the URL that will send you to the 
                                            // listeed componenet. 
  { path: 'dashboard', component: DashboardComponent },
  
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' } // this means that when the app starts and when it has none 
                                                  // of the other existing paths, it will route to the dashboard 
                                                  //component by default. when you load the page, suddenly the 
                                                  // defaulted home page will have the /dashboard path in the url
 {path: 'detail/:id', component: HeroDetailsComponent }
                                                ]
            // the :id in the path indicates to angular that this is a placeholder that will be dermined by
            // the specific hero id. we used the *ngFor to insert the current iteration's hero.id into each routerlink
            // at the dashboard template                                      
 }
