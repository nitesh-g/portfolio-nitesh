import React, { Component }  from 'react'
import MySkills from '../components/SkillsComponent/MySkills'
import MyWork from '../components/Work/MyWork'
import { work } from '../containers/data'

export default class Projects extends Component {
	render(){
		return(
			<div>
				<MySkills
				className="skills-row"
				title="Skills"
				 />
				<MyWork workExp = {work} />
			</div>
		);
	}	
}
