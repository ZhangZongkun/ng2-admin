import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { NgaMenuItem, NgaMenuModuleConfig } from './menu.options';

@Injectable()
export class NgaMenuService {

  private items: List<NgaMenuItem>;
  private itemsSubject = new Subject();

  menuItems$: Observable<List<NgaMenuItem>> = this.itemsSubject.asObservable();

  constructor(@Optional() private config: NgaMenuModuleConfig,
                          private router: Router) {
    this.items = List(this.config.menuItems);
  }

  getMenuItems(): Observable<List<NgaMenuItem>> {
    return Observable.create((observer: any) => {
      observer.next(this.items);
      observer.complete();
    });
  }

  addMenuItem(item: NgaMenuItem) {
    const result = this.items.push(item);

    this.itemsSubject.next(result);
    this.itemsSubject.complete();
  }

  selectMenuItem(item: NgaMenuItem) {
  }

}
