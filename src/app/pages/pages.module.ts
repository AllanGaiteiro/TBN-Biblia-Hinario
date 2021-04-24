
// import { HinarioComponent } from './hinario/hinario.component';
import { BibliaComponent } from './biblia/biblia.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent,
        BibliaComponent,
        // HinarioComponent,
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ]
})

export class PagesModule { }