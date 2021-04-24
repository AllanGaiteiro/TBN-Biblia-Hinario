import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  sliderValue: number;
  constructor() {
    //
  }

  ngOnInit(): void {
    this.sliderValue = 50;
  }


  valueLabel(value: number): number {

    return value;
  }
  setSize(event: any): void {
    if (event.value) {
      this.sizeChange?.emit(event.value);
    }
  }

}
