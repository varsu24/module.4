(function(window){
var speakHello=new Object();
var speakWord="Hello";
SpeakHello.speak=function(name){
console.log(speakWord+" "+name);
};
window.speakHello=SpeakHello;
})(window);
