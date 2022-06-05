////// Par (1)

var get = document.getElementById("main-content");

////// Par (2)

console.log(get.children);

/////// Par (3)

var rander = document.getElementsByClassName("render")
for (i = 0; i < rander.length; i++) {
   document.write(rander[i].innerHTML + "<br>");
}

///// Par (4)

var firstName = document.getElementById("first-name");
firstName.value = " Hassan Ali ";

////// Par (5)

var lastName = document.getElementById("last-name");
lastName.value = " Jamali "

var email = document.getElementById("email");
email.value = " Jamali@example.com ";

var main = document.getElementById("form-content");
document.write(" Node Type Of Form Content " + main.nodeType);

var last = document.childNodes[1].childNodes[1].childNodes[0].childNodes[1];

console.log(last)

document.write("<br> node type of last name " + last);

var lastChange = document.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[1].innerHTML = "Last Name:     Khan";

document.write("<br>"+lastChange)

var frst = document.getElementById("main-content")
var frstChild = frst.firstChild; 
var lstChild = frst.lastChild

console.log(frstChild, lstChild);


var lastid = document.getElementById("lastName");
var frstsb = lastid.nextSibling;
var prsb = lastid.previousSibling;

console.log(frstsb,prsb);


var email = document.getElementById("email");
var prnt = email.parentNode;
var typ = prnt.nodeType;

console.log(prnt,typ);