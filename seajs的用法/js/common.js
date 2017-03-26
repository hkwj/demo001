
define(function(require,exports,module){
//getStyle
exports.getStyle=function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
		}else{
			return getComputedStyle(obj,false)[attr]
			}
}
//getStyle

//getByClass
exports.getByClass=function(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var aEle=oParent.getElementsByTagName("*");
		var result=[];
		for(var i=0;i<aEle.length;i++){
			var tmpArr=aEle[i].className.split(' ');
			for(var j=0;j<tmpArr.length;j++){
				if(tmpArr[j]==sClass){
				result.push(aEle[i]);
				break;
				}
			}
		}
	}
	return result;
}

//getByClass


})
