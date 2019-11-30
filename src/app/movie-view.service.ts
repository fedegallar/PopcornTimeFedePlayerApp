import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieViewService {

  constructor(private http:HttpClient) { }

  getMovie(imdb_id:string):Observable<Movie>{
    const url = 'https://tv-v2.api-fetch.website/movie/'+imdb_id;
    return this.http.get<Movie>(url);
  } 
}