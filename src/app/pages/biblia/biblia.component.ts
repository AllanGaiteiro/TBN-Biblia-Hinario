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
  chapters: any[] = [];
  chapterNumber: number;
  verses: any[] = [];
  idVerse: any;
  constructor(private service: BibliaService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.service.requestBooks().toPromise().then((data) => {
      this.books = data;
    } 
    ).catch((err)=>{
      console.error('Erro ao requisitar os Livros da Biblia: ',err);
    });
  }

  getChapters(book){
    this.book = book;
   this.service.requestChapters(book.name).toPromise().then((chapters) => {
     for(var i = 1; i< chapters; i++){
      this.chapters.push(i);
     }
  }).catch((err)=>{
    console.error(`Erro ao requisitar os capitulos do livro de ${this.book.name} da Biblia: `,err);
  });
  }

  getChapter(book,chapters){
    this.chapterNumber = chapters
    this.service.requestChapter(book.name,chapters).toPromise().then((verses) => {
      for (const i in verses) {
        this.verses.push({number: i, text: verses[i]})
      }
    }).catch((err)=>{
      console.error(`Erro ao requisitar os versiculos do livro de ${this.book} capitulo ${this.chapterNumber} da Biblia: `,err)
    }); 
  }

  view(view){
    view.parentNode.style.display = "none"
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
