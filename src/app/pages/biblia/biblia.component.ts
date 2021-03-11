import { Component, OnInit } from '@angular/core';
import { BibliaService } from './biblia.service';


@Component({
  selector: 'app-biblia',
  templateUrl: './biblia.component.html',
  styleUrls: ['./biblia.component.css']
})
export class BibliaComponent implements OnInit {

  books: {name: string,abbrev: string}[] = [];
  book: {name: string,abbrev: string};
  chapters: number[] = [];
  chapterNumber: number;
  verses: any[] = [];
  idVerse: any;
  cardSeeChapter: HTMLElement;
  constructor(private service: BibliaService) { }

  ngOnInit(): void {
    this.getBooks();
    var content = document.getElementById('content');
    var seeInfoCapitulo = document.getElementById('headerChapter');
    content.appendChild(seeInfoCapitulo);
  }

  getBooks(){
    this.service.requestBooks().toPromise().then((data) => {
      this.books = data;
    } 
    ).catch((err)=>{
      console.error('Erro ao requisitar os Livros da Biblia: ',err);
    });
  }

  getChapters(){
    if (this.chapters.length) {
      this.chapters = []
    }
   this.service.requestChapters(this.book.name).toPromise().then((chaptersLength) => {
     for(var i = 1; i < chaptersLength; i++){
      this.chapters.push(i);
     }
  }).catch((err)=>{
    console.error(`Erro ao requisitar os capitulos do livro de ${this.book.name} da Biblia: `,err);
  });
  }

  getChapter(){
    if (this.verses.length) {
      this.verses = []
    }
    this.service.requestChapter(this.book.name,this.chapterNumber).toPromise().then((verses) => {
      for (const i in verses) {
        let pos = Number(i)
        this.verses.push({number: pos + 1 , text: verses[pos]})
      }
    }).catch((err)=>{
      console.error(`Erro ao requisitar os versiculos do livro de ${this.book} capitulo ${this.chapterNumber} da Biblia: `,err)
    }); 
  }

  view(){
    this.cardSeeChapter =document.getElementById('cardSeeChapter')
    this.cardSeeChapter.style.display = this.cardSeeChapter.style.display === "none"? "flex": "none";
    /*
    if (view.parentNode.style.marginLeft === '0px') {
      view.parentNode.style.marginLeft = '-280px'
    }else{
      view.parentNode.style.marginLeft = '0px'
    }*/
  }
  linkVerse(e){
    this.idVerse = e
    console.log(e)
    alert(e)
  }

}
