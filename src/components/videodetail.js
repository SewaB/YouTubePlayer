import React from 'react';

const VideoDetail = ({video}) => {

	if (!video){
		return (
			<div> LOADING> > > 
			</div>
		);
	}

	const videoId = video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;
	// 'http://www.youtube.com/embed/' + videoId;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-resposive embed-resposive-16by9">
				<iframe className="embed-resposive-item" src={url} height={400} width={600}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail; 