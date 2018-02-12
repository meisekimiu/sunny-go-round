import React, { Component } from 'react';
import SunnyUtils from './SunnyUtils';
import './slide.css';
class TestSlideB extends Component {
	render() {
		return (
			<div className="slide" style={{
				backgroundImage: "url('http://www.taiyoucon.com/wp-content/uploads/2016/06/13305051_929253100517390_6243514216266059290_o.jpg')",
				backgroundPosition: "center 25%"
			}}>
				<div style={{
					position: "absolute",
					bottom: "5%",
					right: "5%",
					marginLeft: "5%",
					textAlign: "right",
					backgroundColor: "#0009",
					padding: "2em",
					borderRadius: "1em"
				}}>
					<div className="header-text">We got cosplay!</div>
					<div className="body-text">I think text should go here but I don't know what to write.</div>
					<br />
					<a href={SunnyUtils.getPath('/programming/masquerade-sign-up')} className="button-link darken"><div className="button" style={{backgroundColor: "#333"}}>Masquerade Sign Up</div></a> <a href={SunnyUtils.getPath('/programming/cosplay-gatherings')} className="button-link darken"><div className="button" style={{backgroundColor: "#333"}}>Cosplay Gatherings</div></a>
				</div>
			</div>
		);
	}
}

export default TestSlideB;
