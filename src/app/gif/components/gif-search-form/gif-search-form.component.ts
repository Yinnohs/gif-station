import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gif-search-form',
  templateUrl: './gif-search-form.component.html',
  styleUrl: './gif-search-form.component.scss'
})
export class GifSearchFormComponent {


  @Input()
  powerBy:string = 'power by no one'

  inputSearchValue = ''

  

}
