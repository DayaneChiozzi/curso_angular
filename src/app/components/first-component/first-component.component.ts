import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Dayane';
  age: number = 33;
  job = 'Programadora';
  hobbie = ['ler', 'dancar', 'cantar', 'assistir series'];
  car = {
    name: 'C4 Lounge',
    year: 2015,
  };

  constructor() {}

  ngOnInit(): void {}
}
