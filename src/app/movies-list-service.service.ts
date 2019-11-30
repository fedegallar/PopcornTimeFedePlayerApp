import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie';
import { Observable } from 'rxjs';


@Injectable()
export class MoviesListServiceService {

  constructor(private http: HttpClient) { }
  getMoviePagep(p:number): Observable<Movie[]>{
    const url = 'https://tv-v2.api-fetch.website/movies/'+p.toString()+'?sort=trending';
    return this.http.get<Movie[]>(url);
    //return this.http.get(url).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);
  }

  getPagesNumber(): Observable<number>{
    const url = 'https://tv-v2.api-fetch.website/movies/';
    return this.http.get<number>(url);
  }
}
