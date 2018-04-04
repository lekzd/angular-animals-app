import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GuideComponent } from './guide/guide.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {IndexGuard} from './index.guard';
import {GuideGuard} from './guide.guard';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {GuideResolver} from "./guide/guide.resover";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [IndexGuard, GuideGuard, ApiService, GuideResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
