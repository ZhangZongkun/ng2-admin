/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-menu-item2',
  template: `
    <h1>Menu Item #2</h1>
  `,
})

export class NgaMenuItem2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item3',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem3Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item31',
  template: `
    <h1>Menu Item #3.1</h1>
  `,
})
export class NgaMenuItem31Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item33',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem33Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item331',
  template: `
    <h1>Menu Item #3.3.1</h1>
  `,
})
export class NgaMenuItem331Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-test',
  template: `
    <nga-menu></nga-menu>
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuTestComponent {

}
