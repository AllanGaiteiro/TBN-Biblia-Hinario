// modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliaComponent } from './pages/biblia/biblia.component';
import { HinarioComponent } from './pages/hinario/hinario.component';
// import { HinosComponent } from './pages/hinos/hinos.component';
// Components
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibliaComponent,
    HinarioComponent,
    SliderComponent,
    // HinosComponent,
    SidenavComponent,
  ],
  exports: [
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    // TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  imports: [
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
