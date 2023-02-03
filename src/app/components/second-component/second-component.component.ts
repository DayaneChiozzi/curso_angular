import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  name: string = 'Fioravante';
  age: number = 34;
  job = 'Programador';
  hobbie = ['ler', 'dancar', 'estudar', 'assistir series'];
  car = {
    name: 'Ferrari',
    year: 2022,
  };

  constructor(){}

  ngOnInit(): void {}


}
