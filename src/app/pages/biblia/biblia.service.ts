import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibliaService { 
  
  // local
    private readonly API = 'http://localhost:1200/bible/version';
  
  // staging
    //private readonly API = 'https://staging-api-biblia.allangaiteiro.repl.co/biblia'; 
  

  // product
    //private readonly API = 'https://Biblia-API-Express.allangaiteiro.repl.co/biblia';
  
  constructor(private http: HttpClient) { }

  requestBooks(){
    return this.http.post<any[]>(this.API, {version: 'aa'});
    //return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  requestChapters(book:string){
    return this.http.post<number>(`${this.API}/livro/`, {name: book,version: 'aa'});
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  requestChapter(book: string,chapterNumber: number){
    return this.http.post<string[]>(`${this.API}/livro/capitulo`, {name: book, chapterNumber: chapterNumber,version: 'aa'});
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
  
}
