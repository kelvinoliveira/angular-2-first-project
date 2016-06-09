import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { DataTableColumn } from './data-table-column.model';

declare var componentHandler: any;

@Component({
    selector: 'ko-data-table',
    templateUrl: 'app/shared/data-table/data-table.component.html'
})

export class DataTableComponent implements OnInit {

    @Input() rows: Array<any>;
    @Input() columns: Array<DataTableColumn>;
    @Input('show-edit-button') showEditButton: boolean;
    @Input('show-delete-button') showDeleteButton: boolean;
    @Output() onEdit = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();
    showActionsColumn: boolean;

    edit(data: any) {
        this.onEdit.emit(data);
    }

    delete(data: any) {
        this.onDelete.emit(data);
    }

    ngOnInit() {
        if (this.showEditButton || this.showDeleteButton)
            this.showActionsColumn = true;

        setTimeout(() => {
            componentHandler.upgradeAllRegistered();
        }, 1);
    }
}
