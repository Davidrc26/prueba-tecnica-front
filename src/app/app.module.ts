import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCartoonsComponent } from './list-cartoons/list-cartoons.component';
import { HeaderComponent } from './public/master-page/header/header.component';
import { FooterComponent } from './public/master-page/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCartoonsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
