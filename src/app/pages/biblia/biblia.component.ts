import { Component, OnInit } from '@angular/core';
import { BibliaService } from './biblia.service';


@Component({
  selector: 'app-biblia',
  templateUrl: './biblia.component.html',
  styleUrls: ['./biblia.component.css']
})
export class BibliaComponent implements OnInit {

  livrosAll: any;
  livro: any
  allCapitulos: any = [];
  capitulo: any;
  allVersiculos: any = [];
  constructor(private service: BibliaService) { }

  ngOnInit(): void {
    this.livros()
  }

  livros(){
    this.service.getAllLivros().toPromise().then((data) => {
      this.livrosAll = data
    } 
    )
  }
  getAllCaptulo(livro){
    this.livro = livro
    this.service.getAllCapitulos(livro).toPromise().then((capitulos) => {
      capitulos.map(c => {
        (c > 0)? this.allCapitulos.push(c): null;
      })
      
    } 
    )
  }
  getCaptulo(livro,capitulo){
    this.capitulo = capitulo
    this.service.getCapitulo(livro,capitulo).toPromise().then((allVersiculos) => {
      allVersiculos.map(v => {
        (v.numero > 0)? this.allVersiculos.push(v): null;
      })
      
    })
     
    }

}
