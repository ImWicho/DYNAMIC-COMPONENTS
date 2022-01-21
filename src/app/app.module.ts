import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerOneComponent,
    BannerTwoComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
