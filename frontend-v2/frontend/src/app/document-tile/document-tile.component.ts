import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-tile',
  templateUrl: './document-tile.component.html',
  styleUrls: ['./document-tile.component.scss'],
})
export class DocumentTileComponent implements OnInit {
  @Input() document: any;
  constructor() {}

  ngOnInit(): void {}
}
