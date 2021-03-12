import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public fontSizeP: any;
  public paragraph: HTMLCollectionOf<HTMLParagraphElement>;
  public reason: String;
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {}

  public ngOnInit(): void {
    this.fontSizeP = 60;
    this.paragraph = document.getElementsByTagName('p');
    this.settingFont('=');
  }

  public closeSideNav(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  public settingFont = (tipo: '+' | '=' | '-') => {
    this.fontSizeP =
      tipo !== '='
        ? tipo === '+'
          ? this.fontSizeP + 1
          : this.fontSizeP - 1
        : this.fontSizeP;
    for (let i = 0; i < this.paragraph.length; i++) {
      this.paragraph[i].style.fontSize = `${this.fontSizeP}px`;
    }
  }
}
