import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '@modules/home/home.module';

@NgModule({
  declarations: [//PODEMOS DECLARAR COMPONENTES, DIRECTI
    AppComponent
    
    ],
  imports: [//SOLO SE IMPORTAN OTROS MODULOS
    BrowserModule,
    AppRoutingModule,
    //THIS WAS THE MISTAKE
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
