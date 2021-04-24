import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'biblia-hinario-app';

  public fontSizeP: number;
  public paragraph: NodeListOf<HTMLParagraphElement>; // HTMLCollectionOf<HTMLParagraphElement>;
  public reason: string;
  public matIconMenu: 'keyboard_return' | 'keyboard_tab' = 'keyboard_return';
  constructor() {
    // empty
  }

  public ngOnInit(): void {
    this.fontSizeP = 50;
    this.paragraph = document.querySelectorAll('p');

    this.settingFont('=');
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
