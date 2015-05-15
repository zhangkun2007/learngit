/////////////////////////////////////////////////////////////////////////////
// Copyright HKMCI . All rights reserved.
// Create Date : 2011-1-28
// Last Modify Date: 2011-4-27
// Author : Kevin Leng
/////////////////////////////////////////////////////////////////////////////
//alert("kevin");
var preLevel = 2;
var levelDepth = 0;

var divs = "";

function leftNav(strStartLevel, strNumLevels) {
	
	this.m_StartLevel = 3;
	this.m_NumLevels = 20;
	this.m_EndLevel = 20;

	this.m_NavPath = g_navNode_Path;

	leftNav.prototype.Display = leftNav_Display;
	leftNav.prototype.DisplayNode = leftNav_DisplayNode;
	//document.write("<ul>"+ this.m_NavPath+" </ul>");

	if(strStartLevel != '') {
		var value = parseInt(strStartLevel);
		if(value != NaN)
			this.m_StartLevel = value;
	}

	if(strNumLevels != '') {
		var value = parseInt(strNumLevels);
		if(value != NaN)
			this.m_NumLevels = value;
	}

	this.m_EndLevel = this.m_StartLevel + this.m_NumLevels - 1;
}

function leftNav_Display(node) {

	for(var i = 0; i < node.m_subNodes.length; i++) {
		if(g_navNode_Path[1] == node.m_subNodes[i].m_id) {
			document.write("<H2 class='treetitle wryh'>" + node.m_subNodes[i].m_label + "</H2>");

		}
	}

	document.write("<ul class='tree' id ='tree_top'>");
	this.DisplayNode(node, -1);
	document.write("</ul>");

	var isLastSelect = true;
	
	var dbName = document.getElementsByName("nidep-" + levelDepth);
	//if(isLastSelect == true) {
	//var dbName = document.getElementsByName("nidep-" + (levelDepth));
	//$(dbName).parent().parent().attr("class","childern")
	//}
}

function leftNav_DisplayNode(node, last) {

	var bSelected = false;

	var nodeClass = "child";
	//this.m_ClassName

	var nodeLevel = node.m_level;

	var lastCount = last;

	var nodeName = "";
	//if (nodeLevel > 6)
	//	nodeLevel = 6;
	if(nodeLevel > levelDepth) {
		levelDepth = nodeLevel;
	}

	/* if is the sub level*/
	if(this.m_NavPath.length > 0 && node.m_level < this.m_NavPath.length) {
		if(this.m_NavPath[node.m_level] == node.m_id) {

			if(node.m_level > 0 || (node.m_level == 0 && this.m_NavPath.length == 1)) {
				
				bSelected = true;
				//nodeColor = this.m_FocusColor;
				//nodeClass += '-focus';
				nodeClass = "child selected";

			}
		}
	}

	if(nodeLevel > 0)
		//nodeClass += '-' + nodeLevel+" "+node.m_level+"   "+this.m_NavPath.length+" "+this.m_NavPath[node.m_level]+" "+node.m_id;
		nodeName += 'nidep-' + nodeLevel;
	/*	if(nodeLevel>2 && lastCount == 0){
	 nodeClass="last";
	 }*/

	if(node.m_level >= this.m_StartLevel && node.m_level <= this.m_EndLevel) {
		var ds = new Array();
		var di = 0;
		var newOpenPage = '';

		//if(nodeLevel > 2) {
		//	document.write("<ul class='childern' id='1006'>");
		//}

		if(node.cp_externalUrl) {
			//alert(HWFDomainNamePath);
			//alert(currDomainNamePath);
			node.m_href = node.cp_externalUrl;
			if(node.m_href.indexOf("enterprise.huawei.com") > -1){
				
			}else{
				newOpenPage = "_blank";
			}

		}
		var url = location.href;
		var sourceSiteId = "/" + g_ssSourceSiteId + "/";
		if(url.indexOf("enterprise.huawei.com") > -1 && ssUrlPrefix == sourceSiteId){
			
		   if(!node.cp_isDynamic || "FALSE" == node.cp_isDynamic)
		   {
		   		var new_href1 = node.m_href;
		   		if(ssUrlPrefix.indexOf("/cnenterprise/") > -1) {
					new_href1 = new_href1.replace(ssUrlPrefix, "/cn/");
				}
		   		//alert("ddd"+node.m_label);
				node.m_href = new_href1;
			}
			
			
		}
		
		if(node.cp_isDynamic && "TRUE" == node.cp_isDynamic) {
			var new_href = node.m_href;
			//if(ssUrlPrefix.indexOf("./") != -1) {
				new_href = new_href.replace(ssUrlPrefix, "/" + g_ssSourceSiteId + "/");
			//}
			node.m_href = "/ilink" + new_href;
			
		}

		if(nodeLevel == 2) {
			//alert("node.m_label====="+node.m_label+"-----"+node.m_subNodes[0]+"---"+typeof(node.m_subNodes[0])+"----"+last);

			document.write("<li>");
			ds[di++] = '<a href="' + node.m_href + '"';

			
			ds[di++] = ' class="node"';
			ds[di++] = ' name="' + nodeName + '" target="' + newOpenPage+ '"';
			ds[di++] = '>'
			ds[di++] = node.m_label;
			//+" "+node.m_level+" "+lastCount;
			ds[di++] = '</a>';
			document.write(ds.join(''));
			if( typeof (node.m_subNodes[0]) != "undefined" && this.m_NavPath[node.m_level] == node.m_id) {
				document.write("<ul class='childern'>");
			}

		} else if(nodeLevel == 3) {
			ds[di++] = '<li><a href="' + node.m_href + '"';

		
			ds[di++] = ' class="' + nodeClass + '" target="' + newOpenPage+ '"';
			ds[di++] = ' name="' + nodeName + '"';
			ds[di++] = '>'
			ds[di++] = node.m_label;
			//+" "+node.m_level+" "+lastCount;
			ds[di++] = '</a></li>';
			document.write(ds.join(''));
			if(node.m_parent.m_subNodes[node.m_parent.m_subNodes.length-1].m_label == node.m_label){
				document.write("</ul>");
			}
		}
		preLevel = nodeLevel;

		if(nodeLevel == 2) {
			document.write("</li>");
		}
	}

	if(bSelected || node.m_level == 0) {

		for(var i = 0; i < node.m_subNodes.length; i++) {

			//this.DisplayNode(node.m_subNodes[i]);
			this.DisplayNode(node.m_subNodes[i], node.m_subNodes.length - i - 1);

		}

	}

}
