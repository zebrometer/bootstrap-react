
function createPromiseMiddleware(other) {
	return store => next => action => {
	  if (typeof action === 'undefined') {
	    throw new Error('Action should not be undefined!')
	  }

	  if (typeof action === 'function') {
	    action = action(store.dispatch, store.getState, other)
	  }

	  if (typeof action.then !== 'function') {
	    if (!action.type) throw new Error('Action has no type!  Check ActionTypes.')
	    return next(action)
	  }

	  return Promise.resolve(action).then(store.dispatch).catch( (error)=> {
	    setTimeout( ()=> { throw error } , 0 )
	  })
	}
}

const mw = createPromiseMiddleware()
mw.withOtherArgument = createPromiseMiddleware

export default mw
