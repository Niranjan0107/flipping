import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent {


  sliderValue: number = 50;
  sliderValue2: number = 3000000;
  
  activeIndex: number = 1;

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }
}
