import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-tile',
  templateUrl: './document-tile.component.html',
  styleUrls: ['./document-tile.component.scss'],
})
export class DocumentTileComponent implements OnInit {
  @Input() document: any;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  openDoc() {
    this.router.navigate(['document/' + this.document]);
  }
}
