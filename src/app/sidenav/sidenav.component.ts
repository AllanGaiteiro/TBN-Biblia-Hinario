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
  public paragraph: NodeListOf<HTMLParagraphElement>;
  public reason: string;
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {}

  public ngOnInit(): void {
    this.fontSizeP = 60;
    this.paragraph = document.querySelectorAll('p');
    this.settingFont('=');
  }

  public closeSideNav(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }

  public settingFont = (tipo: '+' | '=' | '-'): void => {
    this.fontSizeP =
      tipo !== '='
        ? tipo === '+'
          ? this.fontSizeP + 1
          : this.fontSizeP - 1
        : this.fontSizeP;
    this.paragraph.forEach((p) => (p.style.fontSize = `${this.fontSizeP}px`));
  };
}
