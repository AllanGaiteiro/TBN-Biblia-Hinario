import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'biblia-hinario-app';
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public fontSizeP: any;
  public paragraph: HTMLCollectionOf<HTMLParagraphElement>;
  public reason: String;
  public matIconMenu: 'close' | 'menu' = 'close';
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {}

  public ngOnInit(): void {
    this.fontSizeP = 60;
    this.paragraph = document.getElementsByTagName('p');
    this.settingFont('=');
  }

  public moveContent() {
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
  };
}
