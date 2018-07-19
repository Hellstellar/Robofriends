import { SEARCH_FIELD_CHANGE } from './constants'

export const setSearchField = (text) => ({
	type: SEARCH_FIELD_CHANGE,
	payload: text
})