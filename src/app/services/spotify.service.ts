import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artists:any [] = [];

    urlSearch:string = "https://api.spotify.com/v1/search";

    constructor( private http:Http ) { }

    getArtist( termino:string ){

        let headers = new Headers();
        headers.append( 'authorization', 'Bearer ' );

        let query = `q=${ termino }&type=artist`;
        let url = this.urlSearch + query;

        return this.http.get( url )
                .map( res =>{
                    console.log(res);
                } )

    }

}
