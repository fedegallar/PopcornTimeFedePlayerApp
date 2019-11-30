import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MoviesPageComponent } from './movies-page/movies-page.component';
import {MoviesListServiceService} from './movies-list-service.service';
import { Movie } from './Movie';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { routing } from './app.routes';
import { MovieViewService } from './movie-view.service';
import { TorrentplayerComponent } from './torrentplayer/torrentplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieViewComponent,
    TorrentplayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, NgxPaginationModule,routing
  ],
  providers: [MoviesListServiceService,MovieViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
