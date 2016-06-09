import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { DataTableColumn, DataTableComponent, HeroService, Hero } from '../shared/shared';

@Component({
    templateUrl: 'app/hero/hero.component.html',
    directives: [DataTableComponent]
})

export class HeroComponent implements OnInit {

    private heroes: Array<Hero>;
    private columns: Array<DataTableColumn> = [
        { header: 'ID', field: 'Id', type: 'number', width: '10%' },
        { header: 'Name', field: 'Name', type: 'string', width: '' },
        { header: 'Full Name', field: 'FullName', type: 'string', width: '' }
    ];

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    ngOnInit() {
        this.heroes = this.heroService.getAll();
    }

    onEdit(data: Hero): void {
        this.router.navigate(['HeroDetail', { id: data.Id }]);
    }

    onDelete(data: Hero): void {
        console.log('Delete', data.Id);
    }

    new() {
        console.log('New');
    }
}
