import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Movie } from './Movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesListServiceService {

  constructor(private http: Http) { }
  getMoviePagep(p:number): Promise<Movie[]>{
    const url = 'https://tv-v2.api-fetch.website/movies/'+p.toString()+'?sort=trending';
    return this.http.get(url).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);
  }

  getPagesNumber(): Promise<number>{
    const url = 'https://tv-v2.api-fetch.website/movies/';
    return this.http.get(url).toPromise().then(response => response.json.length as number).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 
}
