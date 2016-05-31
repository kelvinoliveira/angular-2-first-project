import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    
    private heroes: Array<any> = [
        {
            'ID': 1,
            'Name': 'Hero 1'
        },
        {
            'ID': 2,
            'Name': 'Hero 2'
        }
    ];
    
    getAll(): Array<any> {
        return this.heroes;
    }
}