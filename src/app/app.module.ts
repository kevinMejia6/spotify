import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

@NgModule({
  declarations: [//PODEMOS DECLARAR COMPONENTES, DIRECTI
    AppComponent,
    // HomePageComponent
    ],
  imports: [//SOLO SE IMPORTAN OTROS MODULOS
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
