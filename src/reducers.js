import { SEARCH_FIELD_CHANGE } from './constants'

const initialState = {
	searchField: ''
}

export const searchRobots = (state = initialState, action={}) => {
	switch(action.type) {
		case SEARCH_FIELD_CHANGE: return (
			Object.assign({}, state, { searchField: action.payload })
		)
		default: 
			return state;
	}
}