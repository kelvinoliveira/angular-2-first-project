import { Injectable } from '@angular/core';

import { Hero } from './model/model';

@Injectable()
export class HeroService {

    private heroes: Array<Hero> = [
        {
            'Id': 1,
            'Name': 'Batman',
            'FullName': 'Bruce Wayne',
            'Powers': ['Martial Arts Master', 'Genius-Level Intellect']
        },
        {
            'Id': 2,
            'Name': 'Superman',
            'FullName': 'Clark Kent (Kal-El)',
            'Powers': ['Superhuman Strength', 'Superhuman Speed', 'Superhuman Stamina', 'Flight', 'Healing Factor', 'Heat Vision']
        },
        {
            'Id': 3,
            'Name': 'Iron Man',
            'FullName': 'Tony Stark',
            'Powers': ['Direct Cybernetic Interface']
        },
        {
            'Id': 4,
            'Name': 'Captain America',
            'FullName': 'Steven Rogers',
            'Powers': ['Peak Human Strength', 'Peak Human Speed', 'Peak Human Stamina', 'Peak Human Healing']
        }
    ];

    getAll(): Array<Hero> {
        return this.heroes;
    }
}