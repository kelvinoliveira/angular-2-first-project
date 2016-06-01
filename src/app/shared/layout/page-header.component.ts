import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: '[ko-page-header]',
    templateUrl: 'app/shared/layout/page-header.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PageHeaderComponent { 

    constructor(private router: Router) { }
}
