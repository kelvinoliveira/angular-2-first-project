import { Component } from '@angular/core';

import { VillainService, Villain } from '../shared/shared';

@Component({
    templateUrl: 'app/villain/villain.component.html'
})

export class VillainComponent { 
    
    private villains: Array<Villain>;
    
    constructor(private _villainService: VillainService) {
        this.villains = _villainService.getAll();
    }
}
