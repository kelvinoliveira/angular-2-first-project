import { Component } from '@angular/core';

import { DataTableColumn, DataTableComponent, VillainService, Villain } from '../shared/shared';

@Component({
    templateUrl: 'app/villain/villain.component.html',
    directives: [DataTableComponent]
})

export class VillainComponent {

    private villains: Array<Villain>;
    private columns: Array<DataTableColumn> = [
        { header: 'Id', field: 'Id', type: 'number', width: '10%' },
        { header: 'Name', field: 'Name', type: 'string' },
        { header: 'Full Name', field: 'FullName', type: 'string' }
    ];

    constructor(private _villainService: VillainService) {
        this.villains = _villainService.getAll();
    }

    onEdit(data: Villain): void {
        console.log('Edit', data.Id);
    }

    onDelete(data: Villain): void {
        console.log('Delete', data.Id);
    }
}
