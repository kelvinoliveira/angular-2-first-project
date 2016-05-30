import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroesComponent } from './heroes/heroes';
import { HomeComponent } from './home/home';
import { VillainsComponent } from './villains/villains';

declare var componentHandler: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/villains', name: 'Villains', component: VillainsComponent },
])

export class AppComponent implements OnInit { 
    
    ngOnInit(): void {
        componentHandler.upgradeAllRegistered();
    }
}
