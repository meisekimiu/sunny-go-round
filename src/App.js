import React, { Component } from 'react';
import TestSlideA from './slides/TestSlide1';
import TestSlideB from './slides/TestSlide2';

class SunnyGoRound extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			transitionSlide: 0
		};
		this.slides = [
			<TestSlideA />,
			<TestSlideB />
		];
	}
	getSlides() {
		if(this.state.currentSlide === this.state.transitionSlide) {
			return this.slides[this.state.currentSlide];
		}
		else {
			return "Transitioning!"
		}
	}
	moveSlide(position) {
		let newslide = (this.state.currentSlide+position) % this.slides.length;
		let movement = newslide != this.state.currentSlide;
		this.setState({
			transitionSlide: newslide
		});
		if(movement) {
			setTimeout(() => {this.completeTransition()},600);
		}
	}
	completeTransition() {
		this.setState({
			currentSlide: this.state.transitionSlide
		});
	}
	render() {
		return (
			<div className="sunny-carousel">
				{this.getSlides()}<br />
				<a href="javascript:;" onClick={() => {this.moveSlide(-1)}}>Previous slide</a> - <a href="javascript:;" onClick={() => {this.moveSlide(1)}}>Next slide</a>
			</div>
		);
	}
}

export default SunnyGoRound;
