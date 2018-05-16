import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  
  constructor(private movieviewservice:MovieViewService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{this.imdb_id = params['imdb_id']});
    this.movieviewservice.getMovie(this.imdb_id).then(m=> this.mov=m);
  }
  LoadTorrentPlayer(magnet:string){
    this.router.navigate(['/torrentplayer', magnet]);
  }

}
