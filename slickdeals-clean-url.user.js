// ==UserScript==
// @name           Slickdeals Clean URL
// @author         h.zhuang
// @contributor    Stephen Schrauger
// @version        2015.05.28
// @description    Removes tracking urls and replaces with original, canonical link
// @lastchanges    added https support
// @namespace      com.schrauger.fork.slickdeals-clean-url
// @homepage       https://github.com/schrauger/slickdeals-clean-url
// @downloadURL    https://raw.githubusercontent.com/schrauger/slickdeals-clean-url/master/slickdeals-clean-url.user.js
// @updateURL      https://raw.githubusercontent.com/schrauger/slickdeals-clean-url/master/slickdeals-clean-url.user.js
// @include        http://slickdeals.net/*
// @include        https://slickdeals.net/*
// @include        http://www.fatwallet.com/*
// @include        https://www.fatwallet.com/*
// ==/UserScript==

var thisLink, allLinks,linkArray;
allLinks = document.getElementsByTagName('a');
for (var j = 0; j < allLinks.length; j++) {
    thisLink = allLinks[j];
    if(thisLink.href.indexOf('http') !=-1)
	{
	linkArray=thisLink.href.split('http');
thisLink.href=decodeURIComponent('http'+linkArray[linkArray.length-1]);
thisLink.href=thisLink.href.replace(/&amp;/g,'&');
	}
}
