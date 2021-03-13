import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  // local
  private readonly api = 'http://localhost:1200/bible/version';

  // staging
  // private readonly API = 'https://staging-api-biblia.allangaiteiro.repl.co/biblia';

  // product
  // private readonly API = 'https://Biblia-API-Express.allangaiteiro.repl.co/biblia';

  constructor(private http: HttpClient) {}

  public requestBooks() {
    return this.http.post<any[]>(this.api, { version: 'aa' });
    // return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  public requestChapters(book: string) {
    return this.http.post<number>(`${this.api}/livro/`, {
      name: book,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  public requestChapter(book: string, chapterNumber: number) {
    return this.http.post<string[]>(`${this.api}/livro/capitulo`, {
      name: book,
      chapterNumber,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
}
