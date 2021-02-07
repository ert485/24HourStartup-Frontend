import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const routePrefix = 'http://agreemint.tetl.ca:8000/api/';

export interface Section {
  english_content: string;
  legal_content: string;
  name: string;
  id: string;
}
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private readonly http: HttpClient) {}
  listDocuments() {
    return this.http.get(routePrefix + 'documents');
  }
  getDocument(id: string) {
    return this.http.get(routePrefix + `document/${id}`);
  }
  getSection(id: string) {
    return this.http.get<Section[]>(routePrefix + `section/${id}`);
  }
}
