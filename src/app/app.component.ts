import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'biblia-hinario-app';
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

  moveContent(){
    var content = document.getElementById('content')
    var sidebar = document.getElementById('sidebar')
    if (content.style.width === '100%') {
      content.style.width = "80%";
      content.style.marginLeft = "20%";
      sidebar.style.left = '0px'
    } else {
      content.style.width = "100%";
      content.style.marginLeft = "0%";
      sidebar.style.left = '-20%'
    }
    
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
