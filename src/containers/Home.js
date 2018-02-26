import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components'
import Container from '../theme/grid/Container'
import './container.css'

const Image = styled.img`
	width: 100%;
`;

export default class Home extends Component {

	constructor(props){
		super(props);
		this.state = { 
			activeTab: 'home'
		}
	}
	static propTypes = {};



	render() {
		return (
			<div className="container">
				<h3 className="name-portfolio">Nitesh Gupta</h3>
				<Image className="nitesh-img" src={require ('../assets/Nitesh-NJ.jpg')} alt="Nitesh-Pic" />
				<p>
					Nitesh ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
				</p>
			</div>
		)
	}
}