import React, { Component } from 'react';

export default class CityButton extends Component {

	constructor(props){
		super(props);

		this.changeCityForecast = this.changeCityForecast.bind(this);
	}

	changeCityForecast() {
		this.props.changeCityForecast(this.props.index);
	}

	render() {
		return(
			<a
				className="weather-widget__button"
				onClick={this.changeCityForecast}
			>
				{this.props.data.name}
			</a>
		)
	}
}