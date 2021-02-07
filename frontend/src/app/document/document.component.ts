import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { BackendService, Section } from '../backend.service';

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
  backendSection$: Observable<Section>;
  document$: Observable<any>;
  restOfSection = {
    sectionTitle: 'Services Section',
    title: 'Hourly rate, with changes',
  };
  ngOnInit(): void {
    const id$ = this.route.paramMap.pipe(
      map((params) => params.get('documentId'))
    );
    this.backendSection$ = this.backend
      .getSection('2')
      .pipe(map((v) => v[0]))
      .pipe(shareReplay(1));
    this.document$ = id$.pipe(
      switchMap((id) => this.backend.getDocument(id)),
      catchError(() => [
        {
          sections: [
            {
              name: 'Services Section',
              id: 'services',
              text: 'How/When should services be rendered for the project?',
            },
            {
              name: 'Payment Terms Section',
              id: 'payment',
              text:
                'How/When should payments be made for the services in the project?',
              selectedTermId: 'beer',
              possibleTerms: [
                {
                  default: true,
                  id: 'beer',
                  title: 'Beer on project completion',
                  text:
                    'The client is required to pay the contractor in the form of a 24 case of beer, ' +
                    'due at the completion of the project (as defined by blah blah blah)',
                  plainEnglish:
                    'Once the project is done, the client will give the contractor 24 beers.',
                },
                {
                  default: false,
                  id: 'completion',
                  title: 'Cash payment on completion',
                },
              ],
            },
            {
              name: 'Intellectual Property Section',
              id: 'ip',
              text:
                'Who can copy/distribute/own any works created in the project?',
              selectedTermId: 'beerware',
              possibleTerms: [
                {
                  default: true,
                  id: 'beerware',
                  title: 'Beerware',
                  text:
                    'As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.',
                  plainEnglish:
                    'Use this software however you like, but kindly return the favor with beer.',
                },
                {
                  default: false,
                  id: 'public-domain',
                  title: 'Public Domain',
                },
              ],
            },
          ],
        },
      ])
    );
  }
}
