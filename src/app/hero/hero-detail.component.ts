import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService, Hero } from '../shared/shared';

declare var componentHandler: any;

@Component({
    templateUrl: 'app/hero/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) { }

    ngOnInit() {
        this.hero = this.heroService.getById(+this.routeParams.get('id'));

        setTimeout(() => {
            componentHandler.upgradeAllRegistered();
        }, 1);
    }

    save() {
        console.log('Save', this.hero.Id);
    }

    cancel() {
        window.history.back();
    }
}
