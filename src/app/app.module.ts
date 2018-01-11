import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { environment } from '../environments/environment';
import { ListenComponent } from './listen/listen.component';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { MenuComponent } from './menu/menu.component';
import { Page2Component } from './pages/page2/page2.component';

import { LogUpdateService } from './_services/log-update.service';
import { PushDataService } from './_services/push-data.service';

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
    HttpClientModule,
    AppRouting,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [LogUpdateService, PushDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
