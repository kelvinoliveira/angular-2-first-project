import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { DataTableColumn, DataTableComponent, VillainService, Villain } from '../shared/shared';

@Component({
    templateUrl: 'app/villain/villain.component.html',
    directives: [DataTableComponent]
})

export class VillainComponent implements OnInit {

    private villains: Array<Villain>;
    private columns: Array<DataTableColumn> = [
        { header: 'Id', field: 'Id', type: 'number', width: '10%' },
        { header: 'Name', field: 'Name', type: 'string', width: '' },
        { header: 'Full Name', field: 'FullName', type: 'string', width: '' }
    ];

    constructor(
        private villainService: VillainService,
        private router: Router) { }

    ngOnInit() {
        this.villains = this.villainService.getAll();
    }

    onEdit(data: Villain): void {
        this.router.navigate(['VillainDetail', { id: data.Id }]);
    }

    onDelete(data: Villain): void {
        console.log('Delete', data.Id);
    }

    new() {
        console.log('New');
    }
}
