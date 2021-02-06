import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  constructor(
    private readonly backend: BackendService,
    private readonly route: ActivatedRoute
  ) {}
  document$: Observable<any>;
  ngOnInit(): void {
    const id$ = this.route.paramMap.pipe(
      map((params) => params.get('documentId'))
    );
    this.document$ = id$.pipe(
      switchMap((id) => this.backend.getDocument(id)),
      catchError(() => [
        {
          sections: [
            {
              name: 'Payment Terms',
              id: 'payment',
              selectedTermId: 'beer',
              possibleTerms: [
                {
                  default: true,
                  id: 'beer',
                  text:
                    'The client is required to pay the contractor in the form of a 24 case of beer, ' +
                    'due at the completion of the project (as defined by blah blah blah)',
                  plainEnglish:
                    'Once the project is done, the client will give the contractor 24 beers.',
                },
              ],
            },
            {
              name: 'Intellectual Property',
              id: 'ip',
              selectedTermId: 'beerware',
              possibleTerms: [
                {
                  default: true,
                  id: 'beerware',
                  text:
                    'As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.',
                  plainEnglish:
                    'Also known as Beerware. Use this software however you like, but kindly return the favor with beer.',
                },
              ],
            },
          ],
        },
      ])
    );
  }
}
