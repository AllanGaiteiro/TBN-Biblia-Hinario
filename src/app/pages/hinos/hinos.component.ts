import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinos',
  templateUrl: './hinos.component.html',
  styleUrls: ['./hinos.component.css']
})
export class HinosComponent implements OnInit {

  searchHinos: any[];
  eventSlide: boolean = false;
  slideTitle: string;
  slideText: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
