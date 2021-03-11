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
    return this.http.get<any[]>(this.API);
    //return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  requestChapters(book:String){
    return this.http.post<Number>(`${this.API}/livro/`, {name: `${book}`});
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  requestChapter(book: String,chapterNumber: Number){
    return this.http.post<String[]>(`${this.API}/livro/capitulo`, {name: `${book}`, cap: `${chapterNumber}`});
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
  
}
