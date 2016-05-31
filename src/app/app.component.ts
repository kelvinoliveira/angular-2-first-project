import { Component, OnInit } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroComponent, HeroService } from './hero/hero';
import { HomeComponent } from './home/home';
import { VillainComponent, VillainService } from './villain/villain';

declare var componentHandler: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        VillainService
    ]
})

@RouteConfig([
    { path: '/heroes', name: 'Heroes', component: HeroComponent },
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/villains', name: 'Villains', component: VillainComponent },
])

export class AppComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit(): void {
        componentHandler.upgradeAllRegistered();
    }
}
