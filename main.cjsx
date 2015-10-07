React = require 'react'
ReactDOM = require 'react-dom'
{Router, Route, Link} = require 'react-router'


App = React.createClass
	render: ->
		<div>
			<h1>App</h1>
			<ul>
				<li><Link to="/page1">Page 1</Link></li>
				<li><Link to="/page2">Page 2</Link></li>
			</ul>
			{@props.children}
		</div>


Page1 = React.createClass
	render: ->
		<h1>Hello World Page1</h1>


Page2 = React.createClass
	render: ->
		<h1>Hello World Page2</h1>


ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="page1" component={Page1} />
			<Route path="page2" component={Page2} />
		</Route>
	</Router>
), document.getElementById('app'))