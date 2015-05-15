//Default Site Studio Generated .js Script File 
function trim(s) 
{
	var tempStr;
	tempStr = s.replace(/\s+$/g,'');
	tempStr = tempStr.replace(/^\s+/g,'');
	return tempStr;
}

function Usearch()
{
	var warn="\u8bf7\u8f93\u5165\u60a8\u8981\u67e5\u627e\u7684\u5173\u952e\u5b57"
	var KeyText = $('#search-box-h').val();
	if(trim(KeyText)== ""){
		alert(warn);
		return false;
	}else{
		var ent_url = window.location.toString();
		var ENTDomainNamePath= 'enterprise.huawei.com,enterprise-beta.huawei.com';
		ENTDomainNamePath = ENTDomainNamePath.split(",");
		var entFlag = 0;
		var entPath = window.location+"";
		for(var i=0;i<ENTDomainNamePath.length;i++){
			if(entPath.indexOf(ENTDomainNamePath[i])>-1){
				entFlag = 1;
			}
		}
		var searchtypes = $('#SEARCH_BOX').find('input[name="searchtype"]:checked').val();
		var actionUrl="";
		if(searchtypes==0){
			actionUrl=$('#SEARCH_BOX').attr('action');
			if(entFlag == 1 && actionUrl.indexOf("enterprise")>-1){
				zz = actionUrl.indexOf("enterprise");
				actionUrl = actionUrl.substring(0,zz)+actionUrl.substring(zz+10);
			}
			actionUrl=actionUrl+"?ssUserText="+encodeURIComponent(KeyText);
		}else if(searchtypes==1){
			if(entFlag == 1){
				actionUrl="/cn/partners/partners-zone/channel-data-tool/index.htm"+"?ssUserText="+KeyText;
			}else{
				actionUrl="/cnenterprise/partners/partners-zone/channel-data-tool/index.htm"+"?ssUserText="+KeyText;
			}
		}else if(searchtypes==2){
			actionUrl = "http://support.huawei.com/enterprise/search/?lang=zh#outside=0&searchCount=1&sp.keyword="+encodeURIComponent(KeyText)+"&sp.lang=zh&sp.type=";
		}
		$('#SEARCH_BOX').attr('action',actionUrl);		
		$('#SEARCH_BOX').submit();
	}
}

function Fsearch()
{
	var warn="\u8bf7\u8f93\u5165\u60a8\u8981\u67e5\u627e\u7684\u5173\u952e\u5b57"
	var KeyText = $('#TBK_SEARCH_BOX').find('input')[0].value;
	$('#TBK_SEARCH_BOX').find('input')[0].value=trim(KeyText);
	if(trim(KeyText)== "" || trim(KeyText)== "Enter keywords"){
		alert(warn);
		return false;
	}else{;
		$('#TBK_SEARCH_BOX').submit();
	}
}
$(function() {
	var HWDomainNamePath= '<!--$#env.HWDomainName-->';
	//HWDomainNamePath ='www.huawei.com,www-beta.huawei.com';
	HWDomainNamePath = HWDomainNamePath.split(",");
	var accFromF = 0;
	var accPath = window.location+"";
	for(var i=0;i<HWDomainNamePath.length;i++){
		if(accPath.indexOf(HWDomainNamePath[i])>-1){
			accFromF = 1;
		}
	}
	if(accFromF == 1){
		//for header search box;
		var HSearchPath = $('#SEARCH_BOX').attr('action');
		if(HSearchPath && HSearchPath.indexOf("/ilink/")==-1){
			HSearchPath = "/ilink/<!--$siteId-->" + HSearchPath.substring(HSearchPath.indexOf("/search/"));
			$('#SEARCH_BOX').attr('action',HSearchPath);
		}
		//for success story form
		var SuccCasePath = $('#ss_form').attr('action');
		if(SuccCasePath && SuccCasePath.indexOf("/ilink/")==-1){
			SuccCasePath = "/ilink/<!--$siteId-->" + SuccCasePath.substring(SuccCasePath.indexOf("/success-story/"));
			$('#ss_form').attr('action',SuccCasePath);
		}
		//for related success story form;
		var RelSuccCasePath = $('#re_ss_form').attr('action');
		if(RelSuccCasePath && RelSuccCasePath.indexOf("/ilink/")==-1){
			RelSuccCasePath = "/ilink/<!--$siteId-->" + RelSuccCasePath.substring(RelSuccCasePath.indexOf("/success-story/"));
			$('#re_ss_form').attr('action',RelSuccCasePath);
		}
		
		//for union search box and  right search box;
	/*	
		var USearchPath = $('#TBK_SEARCH_BOX').attr('action');
		if(USearchPath && USearchPath.indexOf("/ilink/")==-1){
			USearchPath = "<!--$siteId-->" + USearchPath.substring(USearchPath.indexOf("/search/"));
			$('#TBK_SEARCH_BOX').attr('action',USearchPath); 
		}
		*/
		//for pageNav form;
		var USearchPath = $('#PageNav_form').attr('action');
		if(USearchPath && USearchPath.indexOf("/ilink/")==-1){
			USearchPath = "/ilink/<!--$siteId-->" + USearchPath.substring(USearchPath.indexOf("/search/"));
			$('#PageNav_form').attr('action',USearchPath); 
		}
		//for tag cloud and other search link;
		var searchLinkPath = $("a[href*='/search/']");
		if(searchLinkPath.size()>0){
			for(var i=0; i<searchLinkPath.size();i++){
			if(searchLinkPath[i].href.indexOf("/ilink/")==-1){
				searchLinkPath[i].href=$("a[href*='/search/']")[i].href.replace("/<!--$siteId-->/search","/ilink/<!--$siteId-->/search");
				}	
			}
		}
	}
	
	$("#search-box-h").bind("keypress", function(e){
		if(e.keyCode=='13') {
		$(this).blur();
		return Usearch();}
	});
	
	$("#searchBtn").bind("click", Usearch);
});
