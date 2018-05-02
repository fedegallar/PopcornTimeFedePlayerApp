import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { TorrentplayerComponent } from './torrentplayer/torrentplayer.component';

export const routes: Routes = [
    {path: '', component: MoviesPageComponent},
    {path: 'movie-view/:imdb_id', component: MovieViewComponent},
    {path: 'torrentplayer',component: TorrentplayerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);