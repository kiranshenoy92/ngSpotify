import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { appRouterProviders } from './app.route';
import { SpotifyService } from './services/spotify.service';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { NavbarComponent } from './components/navbar/navbar.component';





@NgModule({
  imports: [ BrowserModule , RouterModule , FormsModule , ReactiveFormsModule , HttpModule ],
  declarations: [ AppComponent , SearchComponent , AboutComponent , NavbarComponent , ArtistComponent , AlbumComponent],
  bootstrap: [ AppComponent ],
  providers: [ appRouterProviders , SpotifyService ]
})
export class AppModule { }
