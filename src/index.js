import React from 'react';
import ReactDOM from 'react-dom'
import routes from './routes'

import  {AppContainer}  from 'react-hot-loader'

import './theme/globalStyle'

function render(Component) {
	ReactDOM.render(
		<AppContainer>
			{routes}
		</AppContainer>, 
		document.getElementById('root')
		)
}

render(routes)


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => { render(routes) })
}

// ReactDOM.render(routes, document.getElementById('root'));
