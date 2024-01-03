// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import hero from '../data/heroes'

// console.log( owners );

export const getHeroById = id => hero.find(hero => hero.id === id)

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroByOwner = owner => hero.filter(hero => hero.owner === owner)

// console.log( getHeroesByOwner('Marvel') );
