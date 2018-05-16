import {MoviesListServiceService} from '../movies-list-service.service';
import {  Movie } from '../Movie';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  
  p:number = 1;
  pmax: number;
  movies : Movie[];
  constructor(private movielistservice: MoviesListServiceService, private router: Router) { }
  ngOnInit() {
    this.movielistservice.getMoviePagep(this.p).then(m => this.movies = m);
    this.movielistservice.getPagesNumber().then(pm => this.pmax = pm );
    // SE LEE ASI!!!!: --->> EJEMPLO HIPOTETICO. NO ANDA EL COMANDO  console.log(this.movies[1].torrents.en["1080p"].url); 
  }
  ChangePageDown(){
    if (this.p==1){
      console.log("ESTAS EN LA PÁGINA PRINCIPAL")
    }else{
      this.p --;
      this.movielistservice.getMoviePagep(this.p).then(m => this.movies = m);
    }
  }
  ChangePageUp(){
    if (this.p==this.pmax){
      console.log("ESTAS EN LA ULTIMA PÁGINA")
    }else{
    this.p ++;
    console.log(this.p);
    this.movielistservice.getMoviePagep(this.p).then(m => this.movies = m);
    }

  }
  LoadMoviePage(imdb_id:string){
    console.log(imdb_id);
    this.router.navigate(['/movie-view', imdb_id]);
  }

}
