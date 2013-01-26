# dynload - (jquery plugin) load callback for dynamically loaded dom

## usage
```javascript
	$('#container').dynload(function(){
		// do something
	});
```

$(window).load or $(element).load doesn't work on dom loaded using ajax, so use this plugin to check if the images inside the dom are loaded.

* checks if the images inside the dom are loaded before firing the callback.