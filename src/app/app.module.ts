import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { environment } from '../environments/environment';
import { ListenComponent } from './listen/listen.component';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { MenuComponent } from './menu/menu.component';
import { Page2Component } from './pages/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListenComponent,
    HomeComponent,
    Page1Component,
    MenuComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
