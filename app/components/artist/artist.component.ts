import { Component , OnInit} from '@angular/core';
import { Album } from '../../Album';
import { Artist } from '../../Artist';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { MdCard} from '@angular2-material/card';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit { 

    albums : Album;
    artist : Artist;

    constructor(private _spotifyService : SpotifyService , private _route : ActivatedRoute ) {

    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                .subscribe(artist => {
                    this.artist = artist;
                })
                this._spotifyService.getArtistAlbum(id)
                .subscribe( album => {
                    console.log(album.items);
                    this.albums = album.items;
                })
            });
    }
}