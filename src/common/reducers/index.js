import { combineReducers } from 'redux'

const app = combineReducers({
	test: (state = {}) => state,
})

const root = (state, action) => {
	// set state undefined if action.type is logout

	return app(state, action)
}

export default root
