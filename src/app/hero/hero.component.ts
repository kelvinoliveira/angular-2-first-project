import { Component } from '@angular/core';

import { DataTableColumn, DataTableComponent, HeroService, Hero } from '../shared/shared';

@Component({
    templateUrl: 'app/hero/hero.component.html',
    directives: [DataTableComponent]
})

export class HeroComponent {

    private heroes: Array<Hero>;
    private columns: Array<DataTableColumn> = [
        { header: 'ID', field: 'Id', type: 'number', width: '10%' },
        { header: 'Name', field: 'Name', type: 'string' },
        { header: 'Full Name', field: 'FullName', type: 'string' }
    ];

    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getAll();
    }

    onEdit(data: Hero): void {
        console.log('Edit', data.Id);
    }

    onDelete(data: Hero): void {
        console.log('Delete', data.Id);
    }
}
