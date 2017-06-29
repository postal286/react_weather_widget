import React, {Component} from 'react';

export default class WeatherInformation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			paramsWeather: props.paramsWeather
		}
	}

	componentWillReceiveProps(nextProps){
		if (JSON.stringify(nextProps.paramsWeather) !== JSON.stringify(this.props.paramsWeather)) {
			this.setState({
				paramsWeather: nextProps.paramsWeather
			});
		}
	}

	render() {

		let {paramsWeather} = this.state,
				name = paramsWeather.name,
				temp = paramsWeather.temp,
				weather = paramsWeather.weather,
				wind = paramsWeather.wind,
				clouds = paramsWeather.clouds,
				icon = paramsWeather.icon;

		return (
			<div className="weather-widget__content">

				<div className="weather-widget__content_city-wrapper">
					<h2 className="weather-widget__content_city">
						{name}
					</h2>
				</div>

				<div className="weather-widget__content_icon">
					<img
						src={`http://openweathermap.org/img/w/${icon}.png`}
						alt="Weather-Icon"
					/>
				</div>

				<div className="weather-widget__content_info-wrapper">

					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Weather
						</h3>
						<div className="weather-widget__content_info">
							{weather}
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Temperature
						</h3>
						<div className="weather-widget__content_info">
							{`${temp}°C`}
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Wind Speed
						</h3>
						<div className="weather-widget__content_info">
							{wind} m/s
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Clouds
						</h3>
						<div className="weather-widget__content_info">
							{clouds} %
						</div>
					</div>
				</div>

			</div>
		);
	}
}