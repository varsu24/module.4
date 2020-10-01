(function(window){
var SpeakHello=new Object();
var speakWord="Hello";
SpeakHello.speak=function(name){
console.log(SpeakWord+" "+name);
};
window.SpeakHello=SpeakHello;
});
