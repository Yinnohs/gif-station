import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'gif-item-card',
  templateUrl: './gif-item-card.component.html',
  styleUrl: './gif-item-card.component.scss'
})
export class GifItemCardComponent {
  
  constructor(private toastr: ToastrService){}

  @Input()
  gifName:string = 'Generic gif name'

  @Input()
  gifSource:string = '/assets/test-gif.gif'

  showCopyText(){
    this.toastr.show("Copied gif succesfully")
  }
}
