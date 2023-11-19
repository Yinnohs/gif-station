import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifphyPageComponent } from './pages/gifphy-page/gifphy-page.component';
import { TenorPageComponent } from './pages/tenor-page/tenor-page.component';

const routes: Routes = [
  {
    path: 'gifphy',
    component: GifphyPageComponent,
  },
  {
    path: 'tenor',
    component: TenorPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifRoutingModule {}