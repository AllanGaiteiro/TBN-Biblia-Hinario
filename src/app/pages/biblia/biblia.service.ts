import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {
  private readonly API = 'http://localhost:1000/biblia'
  c: any;
  constructor(private http: HttpClient) { }


  getAllLivros(): Observable<HttpResponse<any>>{
    return this.http.get<any>(this.API)
  }
  getAllCapitulos(livro){
    return this.http.post<any>(`${this.API}/livro/`, {name: `${livro}`})
  }
  getCapitulo(livro,capitulo){
    return this.http.post<any>(`${this.API}/livro/capitulo`, {name: `${livro}`, cap: `${capitulo}`})
  }
  
}
