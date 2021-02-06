import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly backend: BackendService) {}

  documents$: Observable<any>;

  ngOnInit(): void {
    this.documents$ = this.backend
      .listDocuments()
      .pipe(
        catchError(() => [
          [
            'contract1',
            'contract2',
            'contract3',
            'contract4',
            'contract5',
            'contract6',
            'contract7',
          ],
        ])
      );
  }
  newDocument() {}
}
