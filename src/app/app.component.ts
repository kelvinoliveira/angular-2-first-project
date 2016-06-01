import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroComponent } from './hero/hero';
import { HomeComponent } from './home/home';
import { VillainComponent } from './villain/villain';
import { PageHeaderComponent, PageFooterComponent, HeroService, VillainService } from './shared/shared';

declare var componentHandler: any;

@Component({
    selector: 'ko-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        PageHeaderComponent,
        PageFooterComponent
    ],
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

    ngOnInit(): void {
        componentHandler.upgradeAllRegistered();
    }
}
