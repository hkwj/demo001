define(function(require,exports,module){
	var getByClass=require('common.js').getByClass;
	exports.red=function(){
		var arr=getByClass(document,"p1");
		for (var i = 0; i < arr.length; i++) {
			arr[i].style.background="red";
		}
	};
})