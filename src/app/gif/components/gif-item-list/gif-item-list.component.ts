import { Component, Input, OnInit } from '@angular/core';
import { GifphyGifDataInterface, gifApplications } from '../../types';
import { GifService } from '../../gif.service';

@Component({
  selector: 'gif-item-list',
  templateUrl: './gif-item-list.component.html',
  styleUrl: './gif-item-list.component.scss'
})
export class GifItemListComponent implements OnInit{
  constructor(private gifService: GifService){}
  


  @Input()
   application: gifApplications = 'gifphy'

  applicationSelector: Record<gifApplications, any> = {
    gifphy: ()=> this.gifService.getGifphyGifs('random').then(data => this.gifs = data),
    tenor: ()=> this.gifService.getTenorGifs('random').then(data => this.gifs = data),
  }


  gifs: GifphyGifDataInterface[] = [] as GifphyGifDataInterface[];

  ngOnInit(): void {
    this.applicationSelector[this.application]()
  }
}
