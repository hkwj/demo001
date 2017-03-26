define(function(require,exports,module){
	var getByClass=require('common.js').getByClass;
	exports.blue=function(){
		var arr=getByClass(document,"p2");
		for (var i = 0; i < arr.length; i++) {
			arr[i].style.background='blue';
		}
	}
})