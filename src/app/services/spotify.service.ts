import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artists:any [] = [];

    urlSearch:string = "https://api.spotify.com/v1/search";
    urlArtist:string = "https://api.spotify.com/v1/artists";

    constructor( private http:Http ) { }

    getArtists( termino:string ){

        // Request Headers
        let headers = new Headers();
        headers.append( 'authorization', 'Bearer BQCIPm5VgZFlMQmz3scAYVrRbQ_YBIpGXOk32lySdWEQSvqZJfXFU8y9lunNZDX-KvJcWGjx3cdzZ-RzsZXSyg' );

        let query = `?q=${ termino }&type=artist`;
        let url = this.urlSearch + query;

        return this.http.get( url, { headers } )
                .map( res =>{
                    this.artists = res.json().artists.items;
                    console.log(this.artists);
                    return  res.json().artists.items;
                } )

    }

    getArtist( id:string ){

        // Request Headers
        let headers = new Headers();
        headers.append( 'authorization', 'Bearer BQCIPm5VgZFlMQmz3scAYVrRbQ_YBIpGXOk32lySdWEQSvqZJfXFU8y9lunNZDX-KvJcWGjx3cdzZ-RzsZXSyg' );

        let query = `/${ id }`;
        let url = this.urlArtist + query;

        return this.http.get( url, { headers } )
                .map( res =>{
                    console.log( res.json() )
                    return res.json();
                } )

    }

    getTopTracks( id:string ){
        // Request Headers
        let headers = new Headers();
        headers.append( 'authorization', 'Bearer BQCIPm5VgZFlMQmz3scAYVrRbQ_YBIpGXOk32lySdWEQSvqZJfXFU8y9lunNZDX-KvJcWGjx3cdzZ-RzsZXSyg' );

        let query = `/${ id }/top-tracks?country=US`; // *country will be different
        let url = this.urlArtist + query;

        return this.http.get( url, { headers } )
                .map( res =>{
                    console.log( res.json().tracks )
                    return res.json().tracks;
                })
    }

}
