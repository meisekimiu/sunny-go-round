import React, { Component } from 'react';
import TestSlideA from './slides/TestSlide1';
import TestSlideB from './slides/TestSlide2';
import TestSlideC from './slides/TestSlide3';

import FontAwesome from 'react-fontawesome';

import {Modulo} from './Helpers.js';

import './animation.css';

class SunnyGoRound extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			transitionSlide: 0,
			delta: 0
		};
		this.slides = [
			<TestSlideA />,
			<TestSlideB />,
			<TestSlideC />
		];
	}
	getSlides() {
		if(this.state.currentSlide === this.state.transitionSlide) {
			return (
				<div style={{position: "relative"}}>
					<div className="animatedTransition">
						{this.slides[this.state.currentSlide]}
					</div>
				</div>
			);
		}
		else {
			return (
				<div style={{position: "relative"}}>
					<div style={{animationName: this.getExitTransitionName()}} className="animatedTransition">
						{this.slides[this.state.currentSlide]}
					</div>
					<div style={{animationName: this.getEnterTransitionName()}} className="animatedTransition">
						{this.slides[this.state.transitionSlide]}
					</div>
				</div>
			);
		}
	}
	moveSlide(position) {
		let newslide = Modulo(this.state.currentSlide+position,this.slides.length);
		let movement = newslide !== this.state.currentSlide;
		this.setState({
			transitionSlide: newslide,
			delta: position
		});
		if(movement) {
			setTimeout(() => {this.completeTransition()},1000);
		}
	}
	completeTransition() {
		this.setState({
			currentSlide: this.state.transitionSlide
		});
	}
	transitionIsFromLeft() {
		return this.state.delta > 0;
	}
	getEnterTransitionName() {
		if(this.transitionIsFromLeft()) {
			return "enter-to-left";
		}
		else {
			return "enter-to-right";
		}
	}
	getExitTransitionName() {
		if(this.transitionIsFromLeft()) {
			return "exit-to-left";
		}
		else {
			return "exit-to-right";
		}
	}
	render() {
		return (
			<div className="sunny-carousel">
				{this.getSlides()}<br />
				<div className="prev" onClick={() => {this.moveSlide(-1)}}><FontAwesome name="chevron-left" size="3x" /></div>
				<div className="next" onClick={() => {this.moveSlide(1)}}><FontAwesome name="chevron-right" size="3x"/></div>
			</div>
		);
	}
}

export default SunnyGoRound;
