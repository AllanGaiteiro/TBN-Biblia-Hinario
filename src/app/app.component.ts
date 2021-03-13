import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public title = 'biblia-hinario-app';
  public fontSizeP: number;
  public paragraph: NodeListOf<HTMLParagraphElement>; // HTMLCollectionOf<HTMLParagraphElement>;
  public reason: string;
  public matIconMenu: 'close' | 'menu' = 'close';
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {
    // empty
  }

  public ngOnInit(): void {
    this.fontSizeP = 60;
    this.paragraph = document.querySelectorAll('p');
    this.settingFont('=');
  }

  public moveContent(): void {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    if (content.style.width === '100%') {
      content.style.width = '80%';
      content.style.marginLeft = '20%';
      sidebar.style.left = '0px';
      this.matIconMenu = 'close';
    } else {
      content.style.width = '100%';
      content.style.marginLeft = '0%';
      sidebar.style.left = '-20%';
      this.matIconMenu = 'menu';
    }
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
