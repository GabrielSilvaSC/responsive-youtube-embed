
// Called automatically when JavaScript client library is loaded.
//function onClientLoad() {
//    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
//}

//// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey(document.getElementById('key').value);
}
 
// Called when the search button "Pesquisar" is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: 'video',
        maxResults: '20',
        q:query
    });
    request.execute(populatePageWithDataVideos);
}

// Create div with videos
function populatePageWithDataVideos(response){
	$('#videosYouTube').empty();
	for(i = 0; i < response.items.length; i++){
		
		var dataFormat = moment(response.items[i].snippet.publishedAt).format('DD/MM/YYYY');
		
		$('#videosYouTube').append( '<div class="social-feed-box">' +
									'	<div class="social-avatar">' +
									'		<div class="media-body">' +
									'			<a>'+ response.items[i].snippet.title +'</a> <small class=\"text-muted\">Data de Publicação '+ dataFormat +'></small>' +
									'		</div>' +
									'	</div>' +
									'	<div class="social-body">' +
									'		<p>'+ response.items[i].snippet.description +'</p>' +
									'		<div class="embed-container">' +
									'			<figure>' +
									'				<iframe src="http://www.youtube.com/embed/'+ response.items[i].id.videoId +'?rel=0" frameborder="0" allowfullscreen></iframe>' +
									'			<figure>' +
									'		</div>' +
									'	</div>' +
									'</div>'); 
	}
	$('#videosYouTube').paginate({ limit:5 });
}