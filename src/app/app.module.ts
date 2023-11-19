import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GifModule } from './gif/gif.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app.routes.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,CommonModule,RouterOutlet,GifModule, ComponentsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}