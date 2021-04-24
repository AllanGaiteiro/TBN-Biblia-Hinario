import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/Bible';

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  // local
  // private readonly api = 'http://localhost:1200/bible/version';

  // staging
  // private readonly api = 'https://staging-server-tbn-1.allangaiteiro.repl.co/bible/version';

  // product
   private readonly api = 'https://prod-server-tbn.allangaiteiro.repl.co/bible/version';

  constructor(private http: HttpClient) {
    // empty
  }

  public requestBooks(): Observable<Book[]> {
    return this.http.post<Book[]>(this.api, { version: 'aa' });
    // return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  public requestChapters(book: string): Observable<number> {
    return this.http.post<number>(`${this.api}/livro/`, {
      name: book,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  public requestChapter(
    book: string,
    chapterNumber: number
  ): Observable<string[]> {
    return this.http.post<string[]>(`${this.api}/livro/capitulo`, {
      name: book,
      chapterNumber,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
}
