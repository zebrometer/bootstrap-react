
import {
	PAGE_ACTIVATED,
	TEMPLATES_LOADED
} from './actions'

const initialState = {
	activePage: 0,
	templates: [],
	templatesLoaded: false,
	canGoNext: false
}

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case PAGE_ACTIVATED:
			return { ...state, activePage: action.value }
		case TEMPLATES_LOADED:
			return { ...state,
					templates: action.value.templates.slice(),
					canGoNext: action.value.canGoNext,
					templatesLoaded: true
			}
	}
  return initialState
}
