/*
 dynload
 version : 0.1
 
 Author: hackerone (https://github.com/hackerone)

 Copyright (C) 2013 hackerone
 Licensed under the MIT license (MIT)

 checks if the specified container and images (if any) inside it are is loaded.
*/
(function($, window){
	$.fn.dynload = function(callback){
		var images = $('img', this);

		var totalImages = images.length;
		var counter = 0;

		$.fn.dynLoad.defaults = {
			loadCompleteCallback: callback, 
		}
	    var opts = $.extend({}, $.fn.dynLoad.defaults, callback);

	    var imgLoaded = function(){
	    	counter++;
	    	if(counter == totalImages){
	    		callback();
	    	}
	    }
	    if(totalImages == 0)callback();
	    else{
		    images.each(function(i,e){
		    	var w = $(this).width();
		    	if(w){
		    		imgLoaded();
		    	}else{
		    		$(this).load(function(){
		    			imgLoaded();
		    		});
		    	}
		    });	
	    }
	}
})(jQuery, window);