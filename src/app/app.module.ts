import { PagesModule } from './pages/pages.module';
import { AngularMaterialModule } from './angular.material.module';
// modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,

    SidenavComponent,
  ],
  exports: [
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    // TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
