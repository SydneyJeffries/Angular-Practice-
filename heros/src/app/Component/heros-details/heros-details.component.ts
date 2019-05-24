import { Component, OnInit, Input } from '@angular/core';
import { HeroClass } from '../../HeroClass';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {

  @input () hero : HeroClass
  
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location ) { }

  ngOnInit() {
    getHero(): void {      /// .snapshot : this gets the route snapshot after the route was created // snapshot.paramMap.get('id') returns the id of the route
      const id = +this.route.snapshot.paramMap.get('id'); // the + operator turned the returned string id into a number id which is needed for the server fetch
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero) // subscribe sends back data to components that are subscribed to the observable
    }
  }
  
  goBack(): void {
    this.location.back() 
  }

  save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(()=> this.goBack())
  }
}
