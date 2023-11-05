import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
