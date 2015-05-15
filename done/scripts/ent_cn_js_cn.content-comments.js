function loadCommentsPage(startRow) {
	var commentData = {
		IdcService : "GET_CONTENT_COMMENTS_BY_PAGE",
		dDocName : $("#comments-id").val(),
		startRow : startRow,
		endRow : parseInt(startRow)+parseInt("20")
	};

	$.ucm.executeService(commentData, function(ucmResponse){
		var resultHtml = "";
		var searchResults = ucmResponse.ResultSets.CONTENT_COMMENTS;
		if (searchResults.rows.length != 0) {
			var rowIndex = 0;
			resultHtml = resultHtml + "<div class=\"pinglundetails\">";
			for (var rowIndex=0; rowIndex<searchResults.rows.length; rowIndex++) {
				var row = ucmResponse.getRow("CONTENT_COMMENTS", rowIndex);
			/*	
				resultHtml = resultHtml + "<li>"+
							"<div class=\"Img_List\"><img src=\""+$.HttpRelativeWebRoot+"groups/public/documents/webasset/hw_s_170021.gif
\"></div>"+
							"<div class=\"The_Comments\">"+
							"<span>"+row.COMMENTTIME+"</span>"+
							"<p class=\"Name\">"+row.USERID+"</p>"+
							"<p class=\"Text\">"+row.COMMENT+"</p>"+
							"</div>"+	
							"</li>";
				*/
							
				resultHtml = resultHtml +"<div class=\"list\">"+
				"<p class=\"txtcontent\">"+row.COMMENT+"</p>"+
								"<p class=\"owner\">"+row.USERID+
								"<span class=\"pinglundate\">"+row.COMMENTTIME+"</span>"+
								"</p>"+
								"</div>";

			}
			resultHtml = resultHtml + "</div><div class=\"clear\"></div>";
			preparePagingLinks(startRow, ucmResponse.getValue("totalComments"));
		}
		else {
			resultHtml = resultHtml + "<p>\u6682\u65e0\u8bc4\u8bba!</p>";
		}
		$("#comments").html(resultHtml);
		setHeight();
	});			
}

function preparePagingLinks(startRow, totalRows) {
	startRow = parseInt(startRow);
	totalRows = parseInt(totalRows);
	resultsPerPage = 20;
	currentPage = parseInt((startRow/resultsPerPage)+1);
	
	if ((totalRows % resultsPerPage) > 0)
		totalPages = parseInt((totalRows / resultsPerPage) + 1);
	else
		totalPages = parseInt((totalRows / resultsPerPage));
	
	resultHtml = "<ul>";
		
	if (currentPage == 1)
		resultHtml += "<li class=\"Arrow\"><span class=\"blur\"></span></li>";
	else
		resultHtml += "<li class=\"Arrow\"><a id=\"prev-comment\" href=\"#\" onclick=\"loadCommentsPage('"+(startRow-resultsPerPage)+"')\"></a></li>";
		
	var leftDots = 0;
	var rightDots = 0;
	var offsetFromStart = currentPage - 1;
	var offsetFromEnd = totalPages - currentPage;

	for(i=1; i<= totalPages; i++) {
	
		if (totalPages > 5) {
			if (i==1 || i==totalPages) {}
			else if (currentPage==1 && (i==2 || i==3 || i==4)) {}
			else if (currentPage==totalPages && (i==(totalPages-1) || i==(totalPages-2) || i==(totalPages-3))) {}
			else if (i == currentPage ||  i == (currentPage-1) || i == (currentPage+1)) {}
			else if ((currentPage==2 && i==(currentPage+2)) || (currentPage==(totalPages-1) && i==(currentPage-2))) {}
			else if (offsetFromStart >= 3 && leftDots==0 && i<=4) {
				leftDots = 1;
				resultHtml += "<li style=\"border: medium none;\">...</li>";
				continue;
			}
			else if (offsetFromEnd >= 3 && rightDots==0 && i>=(totalPages-3)) {
				rightDots = 1;
				resultHtml += "<li style=\"border: medium none;\">...</li>";
				continue;
			}
			else {
				continue;
			}
		}

		if (i == currentPage)
			resultHtml += "<li style=\"border: medium none;\" class=\"Color\">"+i+"</li>";
		else
			resultHtml += "<li><a href=\"#\" onclick=\"loadCommentsPage('"+parseInt((resultsPerPage * (i-1))+1)+"')\">"+i+"</a></li>";
	}
	
	
	if (currentPage == totalPages || totalPages == 0)
		resultHtml += "<li class=\"Arrow_Right\"><span id=\"next-comment\" class=\"blur\"></span></li>";
	else
		resultHtml += "<li class=\"Arrow_Right\"><a id=\"next-comment\" href=\"#\" onclick=\"loadCommentsPage('"+(startRow+resultsPerPage)+"')\"></a></li>";
	
	resultHtml += "</ul><div class=\"clear\"></div>"
	
	if (totalPages > 1)
		$("#comments-paging").html(resultHtml);
	else 
		$("#comments-paging").remove();
		
}

function setHeight() {
	//$("#rating_comments", window.parent.document).height($("#limit").height()+231);
	$("#rating_comments", window.parent.document).height($("#limit").height());
}

$(document).ready(function(){

	// add an error handler for AJAX snafus
	$(document).ajaxError(function(e, xmlHttp, settings, exception) {
		//alert("Unable to process the Ajax request to: " + settings.url + "\nException: " + exception +
				//"\nStatus: (" + xmlHttp.status + ") " + xmlHttp.statusText);
	});

	// set the path to UCM: this SHOULD be modified.
	//$.ucm.cgiPath = "/ucm/idcplg";

	$('#submit-comment').click(function(){
		var $t = $("#comment-text");
		var comment;
		if ($.trim($t.val()) == $t.attr('title')) 
			alert("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff1b");
		else { 
			comment = $t.val();

			var commentData = {
				IdcService : "SUBMIT_CONTENT_COMMENT",
				dDocName : $("#comments-id").val(),
				site: $("#comments-site").val(),
				comment: comment,
				userName: $.userName
			};
			var cookieName = $("#comments-id").val()+"-submitted";
			var commentSubmitted = $.cookie(cookieName);
			if (!commentSubmitted) {
				$.ucm.executeService(commentData, function(ucmResponse){
					alert('\u8c22\u8c22\uff01\u4f60\u7684\u8bc4\u8bba\u5df2\u63d0\u4ea4\uff0c\u901a\u8fc7\u5ba1\u6838\u4e4b\u540e\u624d\u80fd\u663e\u793a\u3002');
					$t.val($t.attr('title'));
					$t.addClass("blur");
					var date = new Date();
					date.setTime(date.getTime() + (1 * 60 * 1000));
					$.cookie(cookieName, "1", { expires: date });
				});
			}
			else {
				alert('\u4f60\u5df2\u7ecf\u8bc4\u8bba\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u8bf71\u5206\u949f\u540e\u518d\u6b21\u8bc4\u8bba\u3002');
			}
		}
		return false;
			
	});
	
	$("#comment-text").focus(function() {
		var $t = $(this);
		if ($.trim($t.val()) == $t.attr('title')) {
	  		$t.val('');
	  		$t.removeClass("blur");
	  		$t.css("background-color","#fff");
	  		$t.css("color","#333");
		}
		
	});
	$("#comment-text").blur(function() {
		var $t = $(this);
		var val = $.trim($t.val());
		if (val.length == 0 || val == $t.attr('title')) {
	    	$t.val($t.attr('title'));
	    	$t.addClass("blur");
	    	$t.css("background-color","#F4F4F4");
	    	$t.css("color","#ccc");
	    	
		}
	});
			
	var commentsLoaded = false;
	loadCommentsPage(1);
});
