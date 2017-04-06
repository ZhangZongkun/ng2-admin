import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NgaSidebarService {

  private toggleSubject = new Subject<any>();
  private expandSubject = new Subject<any>();
  private collapseSubject = new Subject<any>();

  toggle$: Observable<any> = this.toggleSubject.asObservable();
  expand$: Observable<any> = this.expandSubject.asObservable();
  collapse$: Observable<any> = this.collapseSubject.asObservable();

  toggle(compact: boolean = false, tag?: string) {
    this.toggleSubject.next({ compact, tag });
    this.toggleSubject.complete();
  }

  expand(tag?: string) {
    this.expandSubject.next({ tag });
    this.toggleSubject.complete();
  }

  collapse(tag?: string) {
    this.collapseSubject.next({ tag });
    this.collapseSubject.complete();
  }

}
