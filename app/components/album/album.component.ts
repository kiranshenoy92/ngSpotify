import { Component , OnInit} from '@angular/core';
import { Album } from '../../Album';
import { Artist } from '../../Artist';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
    private album : Album;
    private artist :Artist;
    constructor(private spotifyService :  SpotifyService , private _route : ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map(param => param['albumId'])
            .subscribe((albumId)=> {
                this.spotifyService.getAlbum(albumId)
                    .subscribe( album => {
                        this.album = album;
                        console.log(album);
                    })
            })
            
        this._route.params
            .map(param => param['artistId'])
            .subscribe((artistId) =>{
                this.spotifyService.getArtist(artistId) 
                    .subscribe( artist => {
                       this.artist=artist;
                       console.log(this.artist)
                    })
                
            })
    }

}