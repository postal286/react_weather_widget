import React, {Component} from 'react';
import axios from 'axios';


import WeatherInformation from './weather-information';
import './weather-widget.css'

const API_KEY = '553baeedbafd8c0df291c4dad4e03fc1';

export class WeatherWidget extends Component {

	constructor(props) {
		super(props);

		this.state = {
			paramsWeather: null
		}
	}

	componentDidMount() {
		this.getData();
		this.timer = setInterval( () => this.getData(), 300000);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || JSON.stringify(this.state.paramsWeather) !== JSON.stringify(nextState.paramsWeather);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	getData() {

		axios.get('http://api.openweathermap.org/data/2.5/weather?q=Omsk',
			{
				params: {
					appid: API_KEY,
					lang: 'ru',
					units: 'metric'
				}
			})
			.then(({ data })=> {
				this.setState({
					paramsWeather:{
						name: data.name,
						temp: data.main.temp,
						wind: data.wind.speed,
						clouds: data.clouds.all,
						weather: data.weather[0].main,
						icon: data.weather[0].icon
					}
				});
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	render() {

		let {paramsWeather} = this.state,
			component,
			errorTitleStyle = {textAlign: 'center'};

		if (paramsWeather === null) {
			component = <h1 style={errorTitleStyle}>Something goes wrong</h1>
		} else {
			component = <WeatherInformation
				paramsWeather={this.state.paramsWeather}
				/>
		}

		return (
			<div className="weather-widget__wrapper">
				{component}
			</div>
		);
	}
}