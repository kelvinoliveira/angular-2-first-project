import { Component } from '@angular/core';

import { VillainService } from './villain.service';

@Component({
    templateUrl: 'app/villain/villain.component.html'
})

export class VillainComponent { 
    
    private villains: Array<any>;
    
    constructor(private _villainService: VillainService) {
        this.villains = _villainService.getAll();
    }
}
