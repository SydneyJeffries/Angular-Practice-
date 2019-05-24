import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../../heroClass';
import { HEROS } from '../../mock-heros';
import { HeroService } from '../../hero.Service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
//   hero: HeroClass = {
//   id: 1,
//   name: 'windstorm'
// };

  selectedHero : HeroClass

  Heros: HeroClass[]

  onSelect( hero: HeroClass ): void {
    this.selectedHero = hero
  }

  getHeros(): void {
    this.heroService.getHeros();
      .subscribe(Heros => this.Heros = heros )
  }


  hero = 'windstorm';
  constructor(private heroService: HeroService) { }

  add(name: string): void {    
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: HeroClass): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeros();
  }

}
