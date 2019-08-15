import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
const Vibrant = require('node-vibrant');

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  loading:boolean;
  artista:any = {};
  tracks:any[];
  color:string[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  setColor(img) {
    Vibrant.from(img).getPalette()
      .then((palette) => {
        this.color = [palette.DarkMuted.hex, palette.DarkVibrant.hex];
        document.getElementById('shadow').style = `background: linear-gradient(0deg, ${this.color[1]}, ${this.color[0]})`;
      });
  }

  getArtista(id:string) {
    this.spotify.getArtista(id).subscribe(data => {
      this.loading = false;
      this.artista = data;
      this.setColor(this.artista.images[0].url);
    });
  }

  getTopTracks(id:string) {
    this.spotify.getTopTracks(id).subscribe(data => {
      this.tracks = data;
    });
  }

}
