import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  documents: string[] = [];

  ngOnInit(): void {
    this.documents = [
      'document1',
      'document2',
      'document3',
      'document4',
      'document5',
      'document6',
      'document7',
    ];
  }
}
