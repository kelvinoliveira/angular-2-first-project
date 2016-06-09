import { Injectable } from '@angular/core';

import { Villain } from './model/model';

@Injectable()
export class VillainService {
    
    private villains: Array<Villain> = [
        {
            'Id': 1,
            'Name': 'Darkseid',
            'FullName': 'Uxas',
            'Powers': ['Omega Effect', 'Superhuman Strength', 'Superhuman Stamina',]
        },
        {
            'Id': 2,
            'Name': 'Joker',
            'FullName': 'Jack Napier',
            'Powers': ['Genius-Level Intellect', 'Pain Resistance', 'Indomitable Will']
        },
        {
            'Id': 3,
            'Name': 'Ultron',
            'FullName': 'Ultron',
            'Powers': ['Superhuman Strength', 'Superhuman Speed', 'Superhuman Durability', 'Flight']
        },
        {
            'Id': 4,
            'Name': 'Red Skull',
            'FullName': 'Johann Shmidt',
            'Powers': ['Fine Unarmed Combatant']
        }
    ];
    
    getAll(): Array<Villain> {
        return this.villains;
    }

    getById(id: number): Villain {
        for (var i = 0; i < this.villains.length; i++) {
            var element = this.villains[i];
            if (element.Id === id)
                return element;
        }
    }
}