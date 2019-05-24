import { Injectable } from '@angular/core';
import { HeroClass } from  '../../HeroClass';
import { HEROS } from '../../mockHeros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatchError, Map, Tap } from 'rxjs/operators';
import { HeroClass } from '../Model/hero-class';


@Injectable({
  providedIn: 'root'
})

export class HeroService {


  constructor(private messageservice : MessageService, private http : HttpClient, private messageService: MessageService) { }

  private heroesUrl = 'api/heros';  // URL to web api

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes (): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl)
    .pipe(
      tap(_ => this.log(`fetched hero id= ${id}`)), // the rxjs tap function allows us to send a log on  a error 
      CatchError(this.handleError<HeroClass>(`getHeros id=${id}`))
    )
  }

 /** PUT: update the hero on the server */ // put() takes the url, data to update, and options
updateHero (hero: HeroClass): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );

/** POST: add a new hero to the server */
addHero (hero: HeroClass): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((newHero: HeroClass) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

/** DELETE: delete the hero from the server */
deleteHero (hero: HeroClass | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, httpOptions).pipe(   //
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}


}



