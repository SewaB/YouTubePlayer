import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';
const API_KEY = '	AIzaSyAfrExRglBXng7E5d0Y-6DE26cyH284ymg';
		

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('surfboards');
	}
		

	videoSearch(term){
		YTSearch({key:API_KEY, term:term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
			// this.setState({ videos })
		});
	}

	render(){

		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} /> 
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList  
					videos={this.state.videos}
					onVideoSelect={selectedVideo=>this.setState({selectedVideo})} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('.container')
);