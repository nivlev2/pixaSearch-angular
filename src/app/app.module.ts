import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
