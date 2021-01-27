import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HinarioService {

  private readonly API = 'https://api.vagalume.com.br/'
  constructor(private http: HttpClient) {
   }
  getParamsHino(hino){
    return this.http.get<any>(`${this.API}search.artmus?q=${hino}&limit=0`)
  }
  getHino(artist,song){
    
    return this.http.get<any>("https://api.vagalume.com.br/search.php"
    + "?art=" + artist
    + "&mus=" + song
    + "&apikey={key}")
  }
  
}
