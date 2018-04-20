import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../common/components'
import configureStore from '../common/configureStore'

const store = configureStore(window.__PRELOADED_STATE__)

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)

if (module.hot) {
	module.hot.accept()
}
