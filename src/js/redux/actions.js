
import { templates } from './data'

export const PAGE_ACTIVATED    = 'PAGE_ACTIVATED'
export const TEMPLATES_LOADED  = 'TEMPLATES_LOADED'
export const TEMPLATES_LOADING = 'TEMPLATES_LOADING'

export function setActivePage(pageIndex) {
	return { type: PAGE_ACTIVATED, value: pageIndex }
}

export function loadTemplates() {
	return (dispatch) => {
		// Will probably be an AJAX call with an async promise middleware
		// For right now just mock it... making it look like we are loading data
		setTimeout(() => {
			dispatch({ type: TEMPLATES_LOADED, value: { templates: templates, canGoNext: true } })
		}, 2000)

		return { type: TEMPLATES_LOADING }
	}
}
