import axios from 'axios'
import { API_BASE_URL } from '../config/config'
// import * as action from '../state/user/actions/actions'

const heroUrl = `${API_BASE_URL}/Login`;

export const signin = (id) => {
    return dispatch => {
        // axios.get(`${heroUrl}/${id}`)
        //     .then(res => {
        //         dispatch(action.fetchHero(res.data))
        //     });
    };
}
