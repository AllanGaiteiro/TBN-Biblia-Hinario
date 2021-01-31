import { Component, OnInit } from '@angular/core';
import { BibliaService } from './biblia.service';

export interface BasicVerses{
  number: number;
  text: string
}
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
  allVersiculos: BasicVerses[];
  idVerse: any;
  constructor(private service: BibliaService) { }

  ngOnInit(): void {
    this.livros()
  }

  livros(){
    this.livrosAll = []
    this.service.getAllLivros().toPromise().then((data) => {
      this.livrosAll = data
    } 
    )
  }
  getAllCaptulo(livro){

    console.log(livro)
    this.livro = livro
    this.allCapitulos = []
    
   console.log(livro)
   this.service.getAllCapitulos(livro).toPromise().then((l) => {
     for(var i = 1; i <= l.chapters; i++){
      this.livro = l
      this.allCapitulos.push(i)
     }
  } 
  )


  }
  getCaptulo(livro,capitulo){
    this.capitulo = capitulo
    this.allVersiculos = []
    this.service.getCapitulo(livro,capitulo).toPromise().then((allVersiculos) => {
      allVersiculos.verses.map(v => {
        this.allVersiculos.push({number: v.number, text: v.text})
      })
      
    })
     
  }

  view(view){
    view.parentNode.style.display = "none"
    /*
    if (view.parentNode.style.marginLeft === '0px') {
      view.parentNode.style.marginLeft = '-280px'
    }else{
      view.parentNode.style.marginLeft = '0px'
    }*/
  }
  linkVerse(e){
    this.idVerse = e
    console.log(e)
    alert(e)
  }

}
