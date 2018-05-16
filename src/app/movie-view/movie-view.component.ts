import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute,Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d
import { AnimateTimings } from '@angular/core/src/animation/dsl';
import { Movie } from '../Movie';
import { MovieViewService } from '../movie-view.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  imdb_id:string;
  sub:any;
  mov: Movie;
<<<<<<< HEAD
  
  constructor(private movieviewservice:MovieViewService,private route: ActivatedRoute,private router:Router) { }
=======
  constructor(private movieviewservice:MovieViewService,private route: ActivatedRoute) { }
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d

  ngOnInit() {
    this.route.params.subscribe(params =>{this.imdb_id = params['imdb_id']});
    this.movieviewservice.getMovie(this.imdb_id).then(m=> this.mov=m);
  }
<<<<<<< HEAD
  LoadTorrentPlayer(magnet:string){
    this.router.navigate(['/torrentplayer', magnet]);
  }
=======
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d

}
