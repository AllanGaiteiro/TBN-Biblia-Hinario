import { Component, OnInit } from '@angular/core';
import { HinarioService } from './hinario.service';

@Component({
  selector: 'app-hinario',
  templateUrl: './hinario.component.html',
  styleUrls: ['./hinario.component.css'],
})
export class HinarioComponent implements OnInit {
  public searchHinos: any[];
  public eventSlide = false;
  public slideTitle: string;
  public slideText: string[];

  constructor(private service: HinarioService) {}

  public ngOnInit(): void {}
  public see(id) {
    const expanded = document.getElementById('hinoText-' + id);

    expanded.style.display =
      expanded.style.display === 'none' ? 'block' : 'none';
  }
  /*
  public getHino(hino) {
    this.service
      .getParamsHino(hino)
      .toPromise()
      .then((value) => {
        this.searchHinos = value.response.docs;

        for (const i in this.searchHinos) {
          const hino = this.searchHinos[i];
          if (
            (hino.band == undefined || null) &&
            (hino.title == undefined || null)
          ) {
            this.service
              .getHino(hino.band, hino.title)
              .toPromise()
              .then((value) => {
                console.log(value);
                if (value.mus[0].text) {
                  const letra = value.mus[0].text.split('\n');
                  this.searchHinos[i].letra = letra;
                  this.searchHinos[i].name = value.mus[0].name;
                }
              });
          }
        }
      });
  }
  public getSlide(hino) {
    this.slideTitle = hino.name;
    this.slideText = hino.letra;
    this.eventSlide = true;
  }
  */
}
