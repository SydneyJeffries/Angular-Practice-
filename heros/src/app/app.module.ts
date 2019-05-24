import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HerosDetailsComponent } from './component/heros-details/heros-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routerModule.forRoot(routes) // this is  how we config the routes we created in app-router for the root. 
                                  // it suplies all the other steps needed for routing. 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
