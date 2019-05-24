import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../../heroclass';
import { HeroService } from '../../heroservice.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: HeroClass[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}