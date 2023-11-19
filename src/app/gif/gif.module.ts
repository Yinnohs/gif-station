import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenorPageComponent } from './pages/tenor-page/tenor-page.component';
import { GifphyPageComponent } from './pages/gifphy-page/gifphy-page.component';
import { GifItemCardComponent } from './components/gif-item-card/gif-item-card.component';
import { GifItemListComponent } from './components/gif-item-list/gif-item-list.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GifService } from './gif.service';
import { GifSearchFormComponent } from './components/gif-search-form/gif-search-form.component';

@NgModule({
  declarations: [TenorPageComponent,GifphyPageComponent, GifItemCardComponent, GifItemListComponent, GifSearchFormComponent],
  imports: [CommonModule, ClipboardModule, BrowserAnimationsModule,ToastrModule.forRoot()],
  exports:[TenorPageComponent, GifphyPageComponent],
  providers:[GifService]
})
export class GifModule { }
