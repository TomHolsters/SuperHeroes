import * as actionTypes from './actionTypes'

export const postHero = (payload) => {
    return {
        type: actionTypes.ADD_HERO,
        payload
    }
};

export const putHero = (payload) => {
    return {
        type: actionTypes.UPDATE_HERO,
        payload
    }
};

export const removeHero = (payload) => {
    return {
        type: actionTypes.DELETE_HERO,
        payload
    }
};

export const removeHeroes = (payload) => {
    return {
        type: actionTypes.DELETE_HEROES,
        payload
    }
};

export const removeAllHeroes = () => {
    return {
        type: actionTypes.DELETE_ALL_HEROES
    }
};

export const fetchHeroById = (payload) => {    
    return {
        type: actionTypes.GET_HERO_BY_ID,
        payload
    }
}
export const fetchHero = (payload) => {    
    return {
        type: actionTypes.GET_HERO,
        payload
    }
}

export const fetchHeroes = (payload) => {    
    return {
        type: actionTypes.GET_HEROES,
        payload
    }
}
