import React, { Component } from 'react';
import SunnyUtils from './SunnyUtils';
import './slide.css';
class TestSlideC extends Component {
	render() {
		return (
			<div className="slide" style={{
				backgroundImage: "url('http://www.taiyoucon.com/wp-content/uploads/2016/06/ff6508e9-b69f-4454-b76a-29050d56feb1.jpg')"
			}}>
				<div className="gridcontainer">
					<div style={{
						position: "absolute",
						bottom: "5%",
						left: "5%",
						backgroundColor: "#0009",
						marginRight: "5%",
						padding: "2em",
						borderRadius: "1em"
					}}>
						<div className="header-text">Taiyou Con Vendor Hall</div>
						<div className="body-text"> </div>
						<br />
						<a href={SunnyUtils.getPath('/exhibitors/vendor-registration')} className="button-link"><div className="button" style={{backgroundColor: "#e55737"}}>Vendor Sign Up</div></a> <a href={SunnyUtils.getPath('/exhibitors/artist-alley-registration')} className="button-link"><div className="button" style={{backgroundColor: "#e55737"}}>Artist Alley Sign Up</div></a>
					</div>
				</div>
			</div>
		);
	}
}

export default TestSlideC;
