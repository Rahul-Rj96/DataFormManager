import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptorService } from './token-interceptor.service';
import { CommonComponentModule } from './common-components/common.module';


@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonComponentModule
  ],
  providers: [ AuthService, AuthGuard, CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
