if ("0") {
    alert( 'Hello' );
}
// the name of JS
let NameOfJS = prompt('What is the "official" name of JavaScript?', '');
if (NameOfJS == 'Java Script') {
    alert("Right");
}
else {
    alert("You don't know? “ECMAScript”! ");
}
// show the sign
let number = prompt("write a number", '');

if (number > 0) {
    alert("It is greater than zero");
}
else if (number < 0) {
    alert("It is less than zero");
}
else {
    alert("It is equal to zero");
}
//if into ?
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
let result1 = (a + b < 4) ? 'Below' : 'Over';
//if lese into ?
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}
let message1 = (login == 'Employee') ? 'Hellp':
    (login == 'Director') ? 'Greeting' :
        (login == "") ? 'No login' :
            '';
