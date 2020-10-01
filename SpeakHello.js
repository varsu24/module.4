(function(window){
var speakHello=new Object();
var speakWord="Hello";
speakHello.speak=function(name){
console.log(speakWord+" "+name);
};
window.speakHello=speakHello;
})(window);
