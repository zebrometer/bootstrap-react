
import {
	compose,
	createStore,
	applyMiddleware
} from 'redux'

import promise  from '../middleware/promise'

const createStoreWithMiddleware = compose(
    applyMiddleware(promise)
)(createStore)

export default function (reducer, initialState) {
	return createStoreWithMiddleware(reducer, initialState)
}
