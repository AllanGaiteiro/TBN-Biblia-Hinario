import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import * as HeaderComponent from '../components/header/header.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public fontSizeP: number;
  public paragraph: NodeListOf<HTMLParagraphElement>;
  public reason: string;
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {
    // no-empty-function
  }

  public ngOnInit(): void {
    this.fontSizeP = 50;
    this.settingFont('=');
  }

  public closeSideNav(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }

  public settingFont = (tipo: '+' | '=' | '-'): void => {
    this.paragraph = document.querySelectorAll('p');
    this.fontSizeP =
      tipo !== '='
        ? tipo === '+'
          ? this.fontSizeP + 1
          : this.fontSizeP - 1
        : this.fontSizeP;
    console.log(this.fontSizeP);
    this.paragraph.forEach((p) => {
      p.style.fontSize = `${this.fontSizeP}px`;
    });
  };
}
