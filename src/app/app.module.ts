import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GuideComponent } from './guide/guide.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {IndexGuard} from './index.guard';
import {GuideGuard} from './guide.guard';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [IndexGuard, GuideGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
