import React, { Component } from 'react';
import SunnyUtils from './SunnyUtils';
import './slide.css';
class TestSlideA extends Component {
	render() {
		return (
			<div className="slide" style={{
				backgroundImage: "url('http://www.taiyoucon.com/wp-content/uploads/2017/08/slider-main-2018.jpg')"
			}}>
				<div style={{
					position: "absolute",
					top: "5%",
					left: "5%"
				}}>
					<div className="header-text">Arizona's Ultimate Anime Experience</div>
					<div className="body-text">Over 400+ Hours of Things to Do</div>
					<br />
					<a href={SunnyUtils.getPath('/information/how-do-i-attend')} className="button-link darken"><div className="button" style={{backgroundColor: "#2AC4EA"}}>How do I attend?</div></a> <a href={SunnyUtils.getPath('/programming')} className="button-link darken"><div className="button" style={{backgroundColor: "#2AC4EA"}}>Programming &amp; Events</div></a>
				</div>
			</div>
		);
	}
}

export default TestSlideA;
