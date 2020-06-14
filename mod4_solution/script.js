(function(window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var i=0;i<names.length;i++){
	var a=names[i];
    var b=a.toLowerCase();
    var c=b.charAt(0);
    if(c=='j'){
    byeSpeaker.speak(names[i]);
    }
    else{
    HelloSpeaker.speak(names[i]);
    }
	}
})(window);