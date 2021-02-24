import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  fontSizeP: any;
  paragraph: HTMLCollectionOf<HTMLParagraphElement>;
  reason: String;
  shouldRun:Boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.fontSizeP = 60 ;
    this.paragraph = document.getElementsByTagName('p');
    this.settingFont('='); 
  }
  

  closeSideNav(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  
  settingFont = (tipo:'+'|'='|'-' ) => {
    this.fontSizeP = tipo !== '='? (tipo === '+'? this.fontSizeP + 1 : this.fontSizeP - 1)  : this.fontSizeP;    for(var i = 0; i < this.paragraph.length;i++) {
      this.paragraph[i].style.fontSize= `${this.fontSizeP}px`;
    }
  }
  
}
