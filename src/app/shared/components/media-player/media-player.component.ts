import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover:TrackModel=
 { cover:'https://lh3.googleusercontent.com/cEM30LuA_J57jLpeA9QpyKmylMSlR4mhMLDUnozjuGY-g7m-62Yw9shW84UZVG510HtXNw=s85',
  album:'By Kevin ❤',
  name:'Pretty Girl',
  url:'http://localhost/tracks.mp3',
  _id:1,
  
}
  constructor() { }

  ngOnInit() {
  }

}
