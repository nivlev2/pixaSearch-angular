import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPixaComponent } from './comps/app-pixa/app-pixa.component';
import { PixaListComponent } from './comps/pixa-list/pixa-list.component';
import { PixaSearchComponent } from './comps/pixa-search/pixa-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPixaComponent,
    PixaListComponent,
    PixaSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
