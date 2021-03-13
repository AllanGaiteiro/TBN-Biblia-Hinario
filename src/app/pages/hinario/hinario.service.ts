import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HinarioService {
  private readonly api = 'https://api.vagalume.com.br/';
  constructor(private http: HttpClient) {
    // empty
  }
  public getParamsHino(hino: string): Observable<any> {
    return this.http.get<any>(`${this.api}search.artmus?q=${hino}&limit=0`);
  }
  public getHino(artist: string, song: string): Observable<any> {
    return this.http.get<any>(
      `${
        'https://api.vagalume.com.br/search.php' + '?art='
      }${artist}&mus=${song}&apikey={key}`
    );
  }
}
