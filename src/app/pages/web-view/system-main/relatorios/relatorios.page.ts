import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {
  students!: any[];

  constructor() {}

  ngOnInit() {
    fetch('./assets/data/students.json')
      .then((res) => res.json())
      .then((json) => {
        this.students = json;
      });
  }
}

