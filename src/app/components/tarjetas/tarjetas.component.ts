import { Component, OnInit, Input } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() item:any = {};
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verArtista(item) {
    let type = item.type;
    let id;
    switch (type) {
      case 'album':
        id = item.artists[0].id;
        break;
      case 'artist':
        id = item.id;
        break;
    }
    this.router.navigate(['/artista',id]);
  }

}
