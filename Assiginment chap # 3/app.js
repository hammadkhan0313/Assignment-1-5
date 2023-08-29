alert("I am 15 year old");

var visitCount= +localStorage.getItem("visitCount");
console.log (visitCount);
 visitCount= ++visitCount;
localStorage.setItem("visitCount", visitCount);
alert ("You have visited this page" + visitCount + "times" )

document.write("My birth year is 2007 </br> My name is Hammad Khan....")