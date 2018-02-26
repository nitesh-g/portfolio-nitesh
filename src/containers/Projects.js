import React, { Component }  from 'react'
import Container from '../theme/grid/Container'
import MySkills from '../components/SkillsComponent/MySkills'

export default class Projects extends Component {
	render(){
		return(
			<Container>
				<h1 className="project-title-wrapper" > Nitesh Projects</h1>
				<MySkills />
			</Container>
			);
}	
}
