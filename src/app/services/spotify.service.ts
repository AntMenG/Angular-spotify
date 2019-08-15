import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo');
  }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQDmxlMWSDK4f6vMM3oOuJJ8iqCKpSfMfAoiN3akaqqUfNyI042-pR720B3z3xbhRQTpMqwy_4JCoNRYKBg'
    });
    return this.http.get(url, { headers: HEADERS });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
          .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino:string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)
          .pipe(map(data => data['artists'].items));
  }

  getArtista(termino:string) {
    return this.getQuery(`artists/${ termino }`);
  }

  getTopTracks(termino:string) {
    return this.getQuery(`artists/${ termino }/top-tracks?country=US`)
          .pipe(map(data => data['tracks']));
  }
}
