/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {
	$("#pageFooter").load("footer.html", function(response, status, xhr) {
		if (status == "error") {
			var msg = "( FOOTER ) Sorry but there was an error: ";
//			alert( msg + xhr.status + " " + xhr.statusText );
		}
	});
});





