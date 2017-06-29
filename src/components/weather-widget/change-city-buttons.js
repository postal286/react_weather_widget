import React, {Component} from 'react';
import _ from 'lodash';

import CityButton from './city-button';

export default class ChangeCityButtons extends Component {

	constructor(props){
		super(props);

		this.state = {
			index: props.index,
			data: props.data
		};

		this.changeCityForecast = this.changeCityForecast.bind(this);
	}

	changeCityForecast(index){
		this.props.changeCity(index);
	}

	render(){

		const data = this.state.data;

		const buttons = _.map(data, (data, index) =>
			<CityButton
				key={index}
				index={index}
				data={data}
				changeCityForecast={this.changeCityForecast}
			/>
		);

		return (
			<div className="weather-widget__buttons-wrapper">
				{buttons}
			</div>
		)
	}
}