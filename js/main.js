// current video you are on
var currentVideo = 0
// list of videos available
var videos = [
	{
		src: 'video/Heaven.mp4',
		type: 'video/mp4'
	},
		{
		src: 'video/Everything-is-right.webm',
		type: 'video/webm'
	}
]

// putting jquery elements into variables so you 
// don't have to parse the DOM each time
var videoElement = $('video')
var sourceElement = $('video source')
console.log(videoElement);

// when the video ends run this
videoElement.on('ended',function(){
	// update the source to the new video
	sourceElement.attr('src', videos[currentVideo].src)
	// update the source type to the new video type
	sourceElement.attr('type', videos[currentVideo].type)
	// load video from source
	videoElement.get(0).load();
	// play video
	videoElement[0].play();

	// check to see if the next video index exists
	if (currentVideo >= videos.length - 1) {
		// reset to zero since there are no more videos
		currentVideo = 0;
	} else {
		// go to next video
		currentVideo++;
	}
});