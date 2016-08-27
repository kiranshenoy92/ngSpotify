import { Component } from '@angular/core';
import {   
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup,
  FormControl  
} from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES ]
})
export class SearchComponent { 
 searchForm :FormGroup;
 searchMusic : FormControl;
 searchResult : Artist[];

 constructor( private searchFormBuilder : FormBuilder, private _spotifyService : SpotifyService){
    this.searchMusic = new FormControl('');
    this.searchForm = searchFormBuilder.group({
        'searchMusic' : this.searchMusic
    }
    )        
 };
    search(){
        if(this.searchMusic.value!=''){
        this._spotifyService.searchMusic(this.searchMusic.value)
            .subscribe(res => {
                this.searchResult=res.artists.items;
            })
        }
} 
}