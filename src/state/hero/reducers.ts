import * as actionType from './actions/actionTypes'
import * as mapper from '../../services/hero.mapper.service'

const initialState = {
    hero: {},
    heroes: [],
    numberOfHeroes: 0,
}

export const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_HERO:
            return {
                ...state,
                hero: action.payload
            };
        // case actionType.GET_HERO_BY_ID:
        //     return {
        //         ...state,
        //         hero: action.payload
        //     };
        case actionType.GET_HEROES:
            let _heroes = [];
            action.payload.forEach(p => _heroes.push(mapper.mapBeHeroToFeHero(p)));
            return {
                ...state,
                heroes: _heroes
            };
        case actionType.ADD_HERO: {
            return {
                ...state,
                heroes: [...state.heroes, { ...mapper.mapBeHeroToFeHero(action.payload) }]
            }
        }
        case actionType.DELETE_HERO: {
            return {
                ...state,
                heroes: state.heroes.filter((hero) => hero.Id !== action.payload)
            }
        }
        case actionType.DELETE_HEROES: {
            const heroToRemove = action.payload;
            let newArr = state.heroes;

            heroToRemove.forEach(hero => {
                newArr = newArr.filter((v, i) => v._id !== hero)
            });
            return {
                ...state,
                heroes: newArr
            }
        }
        case actionType.DELETE_ALL_HEROES: {
            return {
                ...state,
                heroes: []
            }
        }
        case actionType.UPDATE_HERO: {
            return {
                ...state,
                heroes: state.heroes.map(hero => hero._id === action.payload._id ? action.payload : hero)
            }
        }

        default: {
            return { ...state };
        }
    }
};