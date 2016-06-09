import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroComponent, HeroDetailComponent } from './hero/hero';
import { HomeComponent } from './home/home';
import { VillainComponent, VillainDetailComponent } from './villain/villain';
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
    { path: '/hero/list', name: 'Hero', component: HeroComponent },
    { path: '/hero/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/villain/list', name: 'Villain', component: VillainComponent },
    { path: '/villain/detail/:id', name: 'VillainDetail', component: VillainDetailComponent },
])

export class AppComponent implements OnInit {

    ngOnInit(): void {
        setTimeout(() => {
            componentHandler.upgradeAllRegistered();
        }, 1);
    }
}
