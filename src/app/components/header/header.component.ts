import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  content: HTMLElement;
  headerChapter: HTMLElement;
  sidebar: HTMLElement;
  headerContent: HTMLElement;

  public fontSizeP: number;
  public paragraph: NodeListOf<HTMLParagraphElement>; // HTMLCollectionOf<HTMLParagraphElement>;
  public reason: string;
  public matIconMenu: 'keyboard_return' | 'keyboard_tab' = 'keyboard_return';
  public headerButton: 'visibility' | 'visibility_off' = 'visibility';
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {
    // empty
  }
  ngOnInit(): void {
    //
  }
  visibilityHeader(): void {
    const headerChapter = document.getElementById('headerChapter');
    if (headerChapter) {
      headerChapter.style.display =
        headerChapter.style.display !== 'none' ? 'none' : 'flex';
      this.headerButton =
        this.headerButton === 'visibility_off' ? 'visibility' : 'visibility_off';
    }

  }

  public moveContent(): void {
    const sidebar = document.getElementById('sidebar');
    const headerChapter = document.getElementById('headerChapter');
    const content = document.getElementById('content');
    const headerContent = document.getElementById('headerContent');
    if (!!content && !!sidebar && !!headerContent) {
      if (content.style.width === '100%') {
        if (!!headerChapter) {
          headerChapter.style.width = '80%';
          headerChapter.style.left = '20%';
        }
        content.style.width = '80%';
        content.style.marginLeft = '20%';
        sidebar.style.left = '0px';
        headerContent.style.left = '20%';
        this.matIconMenu = 'keyboard_return';
      } else {
        if (!!headerChapter) {
          headerChapter.style.width = '100%';
          headerChapter.style.left = '0%';
        }
        content.style.width = '100%';
        content.style.marginLeft = '0%';
        sidebar.style.left = '-20%';
        headerContent.style.left = '0%';
        this.matIconMenu = 'keyboard_tab';
      }
    }
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
