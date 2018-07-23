
// Called when the search button "Pesquisar" is clicked in the html code
function search() {
    $.get(
            "https://www.googleapis.com/youtube/v3/search/list",{
            part : 'snippet', 
            type: 'video',
            maxResults : 20,
            key: 'AIzaSyD4nxoPW4Y0TFzp0Yd4D_hYnzXEZ_vHRaA',
            q:query },
            function(data) {
                populatePageWithDataVideos(data)
            }
     );
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