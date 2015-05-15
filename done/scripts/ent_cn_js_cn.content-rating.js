var outClick = true;
//JIANGRONG
$(document).ready(function(){

	// add an error handler for AJAX snafus
	$(document).ajaxError(function(e, xmlHttp, settings, exception) {
		//alert("Unable to process the Ajax request to: " + settings.url + "\nException: " + exception +
			//	"\nStatus: (" + xmlHttp.status + ") " + xmlHttp.statusText);
	});

	// set the path to UCM: this SHOULD be modified.
	//$.ucm.cgiPath = "/ucm/idcplg";
	
	$("#submit-rating").click(function(){
		var temp = $(this).attr('id').split('-');
		var rating = $('input[name=rating]:checked').val();
		var ratingData = {
			IdcService : "UPDATE_CONTENT_RATING",
			dID : $("#rating-id").val(),
			dDocName : $("#comments-id").val(),
			rating: rating
		};
		var cookieName = $("#rating-id").val()+"-rated";
		var rateCasted = $.cookie(cookieName);
		if(! rateCasted) {
			$.ucm.executeService(ratingData, function(ucmResponse){
				var newRating = ucmResponse.getValue("newRating");
				var newWidth = newRating*15;
				$("#current-rating").css({ 'width': newWidth});
				$.cookie(cookieName, "1");
				alert("\u8c22\u8c22\u4f60\u7684\u6253\u5206\u3002");
				$("#rating").hide();
				
			});
		}
		else {
			alert("\u4f60\u5df2\u7ecf\u6253\u8fc7\u5206\u4e86");
			$("#rating").hide();
		}
		return false;
			
	});
	
	$("#open-rating").click(function() {
		$("#rating").toggle();
	});
	
	$("#close-rating").click(function() {
		$("#rating").hide();
	});
	
	$("#scoring").hover(function() {
		outClick = false;
	}, function() {
		outClick = true;
	});	
		
	$("body").mouseup(function(e) {
		if(outClick && e.target.id != "open-rating")
			$("#rating").hide();
	});
		
	$("body", parent.window.document).mouseup(function() {
		if(outClick)
			$("#rating").hide();
	});

});
