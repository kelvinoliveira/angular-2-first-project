import { Component } from '@angular/core';

import { HeroService, Hero } from '../shared/shared';

@Component({
    templateUrl: 'app/hero/hero.component.html'
})

export class HeroComponent { 
    
    private heroes: Array<Hero>;
    
    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getAll();
    }
}
