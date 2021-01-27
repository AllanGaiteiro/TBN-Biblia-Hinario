import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BibliaComponent } from './pages/biblia/biblia.component';
import { HinarioComponent } from './pages/hinario/hinario.component';
import { SliderComponent } from './pages/slider/slider.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biblia', component: BibliaComponent },
  { path: 'hinario', component: HinarioComponent },
  { path: 'slider', component: SliderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }