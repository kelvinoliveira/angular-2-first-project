import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { VillainService, Villain } from '../shared/shared';

declare var componentHandler: any;

@Component({
    templateUrl: 'app/villain/villain-detail.component.html'
})

export class VillainDetailComponent implements OnInit {

    villain: Villain;

    constructor(
        private villainService: VillainService,
        private routeParams: RouteParams) { }

    ngOnInit() {
        this.villain = this.villainService.getById(+this.routeParams.get('id'));

        setTimeout(() => {
            componentHandler.upgradeAllRegistered();
        }, 1);
    }

    save() {
        console.log('Save', this.villain.Id);
    }

    cancel() {
        window.history.back();
    }
}
