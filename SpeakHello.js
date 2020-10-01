(function(window){
var SpeakHello=new Object();
var SpeakWord="Hello";
SpeakHello.speak=function(name){
console.log(SpeakWord+" "+name);
};
window.SpeakHello=SpeakHello;
});
