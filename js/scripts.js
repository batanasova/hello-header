// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

//return 0 to 'limit'
var limit = 2;
var numRand = Math.floor(Math.random()*limit);
	
	var msg1 = 'Hello!';
	var msg2 = 'Hola!';
	var msg3 = 'Bonjour!';

	$('h1').text(msg + numRand);

	console.log(msg + numRand);

}); 
