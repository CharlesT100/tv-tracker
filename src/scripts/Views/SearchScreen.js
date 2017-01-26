import React from 'react';
import ShowList from '../Components/ShowList';
import Tracker from '../Services/Tracker';
import Storage from '../Services/Storage';
import Navigation from '../Components/Navigation';
import { hashHistory } from 'react-router';

export default class SearchScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { // the one truth
			shows: []
		};
	}
	
	onInputChange(e) {
		var query = e.target.value;
		this.searchForShows(query);
	}
	
	onShowClick(show) {
		Tracker.getShowDetails(show).then((show) => {
			Storage.addShow(show);
			hashHistory.push('/');
		}).catch((show) => {
			Storage.addShow(show);
			hashHistory.push('/');
		});
	}
	
	searchForShows(query) {
		Tracker.getByName(query).then((shows) => {
			this.setState({shows});
		});
	}
	
	render() {
	 return (
		 <div className="addscreen-container">
			 <Navigation title="Add Show" />
			 <input placeholder="Search for show..." onChange={this.onInputChange.bind(this)} />
			 <ShowList onClick={this.onShowClick} list={this.state.shows} hasAirTime={false}></ShowList>
		 </div>
	 )
	}
}