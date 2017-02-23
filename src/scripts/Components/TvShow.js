import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class TvShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: this.getImage(),
			airDate: 'Loading...'
		};
	}
	
	componentDidMount() {
		this.getAirDate();
	}

	/**
	 * Function to return an image. Returns low-resolution by default, but if 'highResolution' 
	 * is passed in will render high res. Will return empty string if contains invalid json.
	 */
	getImage() {
		if(this.props && this.props.show && this.props.show.image && this.props.show.image.medium) {
			if(this.props.highResolution && this.props.show.image.original) {
				return this.props.show.image.original; 
			}
			if(this.props.show.image.medium) {
				return this.props.show.image.medium;							
			}
		}
		return '';
	}
	
	getAirDate() {
		if(this.props.hasAirTime === false) {
			this.setState({airDate: ''});
		} else if(this.props && this.props.show && this.props.show.nextepisode && this.props.show.nextepisode.airstamp) {
			import('moment').then(moment => {
				this.setState({airDate: moment(this.props.show.nextepisode.airstamp).fromNow()})
			});
		} else {
			this.setState({airDate: 'TBA'});
		}
	}
	
	render() {
		return (
			<GridTile
          title={this.props.show.name}
          subtitle={this.state.airDate}
					onTouchTap={this.props.onClick.bind(this, this.props.show)}
        >
          <img src={this.state.image} />
      </GridTile>
		)
	}
}

export default TvShow;