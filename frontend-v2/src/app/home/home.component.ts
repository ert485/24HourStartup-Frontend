import { ChangeDetectionStrategy, Component, Injector } from "@angular/core";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { AppComponentBase } from "@shared/app-component-base";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BackendService } from "../backend.service";

@Component({
  templateUrl: "./home.component.html",
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends AppComponentBase {
  backendService: BackendService;
  constructor(injector: Injector) {
    super(injector);
    this.backendService = injector.get(BackendService);
  }

  documents$: Observable<any>;

  ngOnInit(): void {
    this.documents$ = this.backendService
      .listDocuments()
      .pipe(
        catchError(() => [
          [
            "document1",
            "document2",
            "document3",
            "document4",
            "document5",
            "document6",
            "document7",
          ],
        ])
      );
  }
  newDocument() {}
}
