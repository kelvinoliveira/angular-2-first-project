import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: '[ko-page-footer]',
    templateUrl: 'app/shared/layout/page-footer.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PageFooterComponent { }
