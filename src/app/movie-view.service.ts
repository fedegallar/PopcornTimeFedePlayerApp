import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { Headers, Http } from '@angular/http';

@Injectable()
export class MovieViewService {

  constructor(private http:Http) { }

  getMovie(imdb_id:string):Promise<Movie>{
    const url = 'https://tv-v2.api-fetch.website/movie/'+imdb_id;
    return this.http.get(url).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 
}