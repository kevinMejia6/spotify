import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover:any=
 { cover:'https://los40.com/los40/imagenes/2021/11/10/musica/1636523871_501730_1636524134_gigante_normal.jpg',
  album:'Hello',
  name:'ITS ME(<3)'
}
  constructor() { }

  ngOnInit() {
  }

}
