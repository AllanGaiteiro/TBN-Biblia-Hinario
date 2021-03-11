import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  fontSizeP: any;
  paragraph: HTMLCollectionOf<HTMLParagraphElement>;
  reason: String;
  expandedMenu = false;
  shouldRun = true;
  panelOpenState = false;
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
