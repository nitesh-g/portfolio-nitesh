import React, { Component }  from 'react'
import MySkills from '../components/SkillsComponent/MySkills'

export default class Projects extends Component {
	render(){
		return(
			<div>
				<MySkills
				className="skills-row"
				title="Skills"
				 />
			</div>
			);
}	
}
