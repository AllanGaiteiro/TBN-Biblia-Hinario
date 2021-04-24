import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import * as HeaderComponent from '../components/header/header.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  // @ViewChild('sidenav') public sidenav: MatSidenav;

  public fontSizePx: number;
  public paragraph: NodeListOf<HTMLParagraphElement>;
  public reason: string;
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {
    // no-empty-function
  }

  public ngOnInit(): void {
    this.fontSizePx = 60;
    this.setFontSize(this.fontSizePx);
  }



  public setFontSize = (value: number): void => {
    this.paragraph = document.querySelectorAll('p');
    console.log(value);
    this.paragraph.forEach((p) => {
      p.style.fontSize = `${value}px`;
    });
  };
}
