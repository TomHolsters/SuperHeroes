import axios from 'axios'
import { API_BASE_URL } from '../config/config'
import * as action from '../state/actions/actions'

const heroUrl = `${API_BASE_URL}/Heroes`

export const getHero = (id) => {
    return dispatch => {
        axios.get(`${heroUrl}/${id}`)
            .then(res => {
                dispatch(action.fetchHero(res.data))
            });
    };
}

export const getHeroes = () => {
    return dispatch => {
        axios.get(heroUrl)
            .then(res => {
                dispatch(action.fetchHeroes(res.data))
            });
    };
}

export const addHero = (hero, pos) => {
    return dispatch => {
        axios.post(heroUrl, { title: hero })
            .then(res => {
                dispatch(action.postHero(res.data))
            })
    };
}

export const updateHero = (value, id) => {
    return dispatch => {
        axios.patch(`${heroUrl}/${id}`, { title: value })
            .then(res => {
                dispatch(action.putHero({ _id: id, title: value }))
            })
    };
}

export const deleteHero = (id) => {
    return dispatch => {
        axios.delete(`${heroUrl}/${id}`)
            .then(res => {
                dispatch(action.removeHero(id))
            })
    }
}

export const deleteHeroes = (ids) => {
    return dispatch => {
        const data = new FormData();
        ids.forEach((id) => data.append('ids', id))
        axios.delete(`${heroUrl}/`, { params: data.getAll('ids') })
            .then(res => {
                dispatch(action.removeHeroes(ids))
            })
    }
}

export const deleteAllHeroes = () => {
    return dispatch => {
        axios.delete(`${heroUrl}/all`)
            .then(res => {
                dispatch(action.removeAllHeroes())
            })
    }
}