import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../../heroClass'
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
hero: HeroClass = {
  id: 1,
  name: 'windstorm'
};


  hero = 'windstorm';
  constructor() { }

  ngOnInit() {
  }

}
