import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibliaService { 
  
  // staging
    private readonly API = 'http://localhost:1000/biblia'
  
  // product
    //private readonly API = 'https://Biblia-API-Express.allangaiteiro.repl.co/biblia'
  
  constructor(private http: HttpClient) { }

  requestBooks(){
    return this.http.get<any>(this.API)
    //return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  requestChapters(livro){
    return this.http.post<any>(`${this.API}/livro/`, {name: `${livro}`})
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  requestChapter(livro,chapters){
    return this.http.post<any>(`${this.API}/livro/capitulo`, {name: `${livro}`, cap: `${chapters}`})
    //return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
  
}
