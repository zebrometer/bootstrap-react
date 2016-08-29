import   React      from 'react'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'
import {
	Router,
	Route,
	IndexRedirect,
	browserHistory
} from 'react-router'

import configureStore from './redux/store'
import  App           from './components/App'
import TemplatePage   from './components/TemplatePage'
import reducers       from './redux/reducer'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const initialState = {}
const store  = configureStore(reducers, initialState)

render(
	<Provider store={store}>

		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRedirect to="/templates" />

				<Route name="Templates" path="/templates" component={TemplatePage} />
			</Route>
		</Router>

	</Provider>

	, document.getElementById('ad-builder')
)
