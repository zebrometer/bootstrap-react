
import {
	PAGE_ACTIVATED,
	TEMPLATES_LOADED
} from './actions'


export default function reducer(state, action) {
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
  return state
}
