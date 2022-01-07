import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderBarComponent } from './components/sider-bar/sider-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';

@NgModule({
  declarations: [SiderBarComponent, MediaPlayerComponent, HeaderUserComponent, CardPlayerComponent, SectionGenericComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SiderBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent, 
    SectionGenericComponent
  ]
})
export class SharedModule { }
