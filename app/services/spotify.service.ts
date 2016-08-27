import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl : string;
    private artistUrl : string;
    private artistAlbumUrl : string;
    private albumId :string;

    constructor(private _http:Http){

    }
    searchMusic(searchStr : string , type = 'artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+searchStr+'&offset=0&limit=20&type='+type;
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }
     getArtist(id : string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());
    }

    getArtistAlbum(id : string) {
        this.artistAlbumUrl ='https://api.spotify.com/v1/artists/'+id+'/albums';
        return this._http.get(this.artistAlbumUrl)
            .map(res => res.json());
    }

    getAlbum(AlbumId : string) {
        this.albumId = 'https://api.spotify.com/v1/albums/'+AlbumId;
        return this._http.get(this.albumId)
            .map(res => res.json());
    }
}
