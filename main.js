// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');



var App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><ReactRouter.Link to="/page1">Page 1</ReactRouter.Link></li>
					<li><ReactRouter.Link to="/page2">Page 2</ReactRouter.Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})


var Page1 = React.createClass({
	render() {
		return(
			<h1>Hello World Page1</h1>
		)
	}
})


var Page2 = React.createClass({
	render() {
		return(
			<h1>Hello World Page2</h1>
		)
	}
})




ReactDOM.render((
  	<ReactRouter.Router>
		<ReactRouter.Route path="/" component={App}>
	  		<ReactRouter.Route path="page1" component={Page1} />
	  		<ReactRouter.Route path="page2" component={Page2} />
		</ReactRouter.Route>
  	</ReactRouter.Router>
), document.getElementById('app'))