import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
    templateUrl: 'app/hero/hero.component.html'
})

export class HeroComponent { 
    
    private heroes: Array<any>;
    
    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getAll();
    }
}
