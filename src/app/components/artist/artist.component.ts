import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist: any;
    tracks: any[];

    constructor( private activatedRoute: ActivatedRoute,
                 private _spotifyService: SpotifyService) { }

    ngOnInit() {

        // Obtain URL param
        this.activatedRoute.params
            .map(parametros => parametros['id'])
            .subscribe( id=>{
                // # Artist Data
                this._spotifyService.getArtist( id )
                    .subscribe( data => this.artist = data );

                // # Artist Toop Tracks
                this._spotifyService.getTopTracks( id )
                    .subscribe( data => this.tracks = data );

            })
    }

}
