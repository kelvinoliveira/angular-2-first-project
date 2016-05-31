import { Injectable } from '@angular/core';

@Injectable()
export class VillainService {
    
    private villains: Array<any> = [
        {
            'ID': 1,
            'Name': 'Villain 1'
        },
        {
            'ID': 2,
            'Name': 'Villain 2'
        }
    ];
    
    getAll(): Array<any> {
        return this.villains;
    }
}