import React, { Component } from 'react';
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
					<a href="/information/how-do-i-attend" className="button-link darken"><div className="button" style={{backgroundColor: "#2AC4EA"}}>How do I attend?</div></a> <a href="/information/main-events" className="button-link darken"><div className="button" style={{backgroundColor: "#2AC4EA"}}>Main Events</div></a> 
				</div>
			</div>
		);
	}
}

export default TestSlideA;
