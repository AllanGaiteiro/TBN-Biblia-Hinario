import { Component, OnInit } from '@angular/core';
import { BibliaService } from './biblia.service';
import { Book } from '../../models/Bible';
@Component({
  selector: 'app-biblia',
  templateUrl: './biblia.component.html',
  styleUrls: ['./biblia.component.css'],
})
export class BibliaComponent implements OnInit {
  public books: Book[] = [];
  public book: Book;
  public chapters: number[] = [];
  public chapterNumber: number;
  public verses: string[];
  public idVerse: string;
  public cardSeeChapter: HTMLElement;
  public content: HTMLElement;
  public seeInfoCapitulo: HTMLElement;
  constructor(private service: BibliaService) {
    // empty
  }

  public ngOnInit(): void {
    this.content = document.getElementById('content');
    this.seeInfoCapitulo = document.getElementById('headerChapter');
    this.getBooks();
    this.seeChapter(this.content, this.seeInfoCapitulo);
  }
  public seeChapter(content: HTMLElement, seeInfoCapitulo: HTMLElement): void {
    if (content && seeInfoCapitulo) {
      content.appendChild(seeInfoCapitulo);
    }
  }

  public getBooks(): void {
    this.service
      .requestBooks()
      .toPromise()
      .then((data) => {
        this.books = data;
      })
      .catch((err) => {
        console.error('Erro ao requisitar os Livros da Biblia: ', err);
      });
  }

  public getChapters(): void {
    if (this.chapters.length) {
      this.chapters = [];
    }
    this.service
      .requestChapters(this.book.name)
      .toPromise()
      .then((chaptersLength) => {
        for (let i = 1; i < chaptersLength; i++) {
          this.chapters.push(i);
        }
      })
      .catch((err) => {
        console.error(
          `Erro ao requisitar os capitulos do livro de ${this.book.name} da Biblia: `,
          err
        );
      });
  }

  public getChapter(): void {
    this.service
      .requestChapter(this.book.name, this.chapterNumber)
      .toPromise()
      .then((verses) => {
        this.verses = verses;
      })
      .catch((err) => {
        console.error(
          `Erro ao requisitar os versiculos do livro de ${this.book} capitulo ${this.chapterNumber} da Biblia: `,
          err
        );
      });
  }

  public view(): void {
    this.cardSeeChapter = document.getElementById('cardSeeChapter');
    this.cardSeeChapter.style.display =
      this.cardSeeChapter.style.display === 'none' ? 'flex' : 'none';
  }
}
