import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const routePrefix = 'backend/';

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
}
