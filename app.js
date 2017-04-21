alert('welcome to Git!');
console.log('we are on a new branch');
var firstName  = 'Evelyn';
var lastName = 'Sharp';
var age = 27;
console.log('Full Name: '+firstName+' '+lastName);
if (age > 19) {
  console.log("Not a Teen");
} else {
  console.log("Teen");
}

var carButton = document.getElementById('get-car');
carButton.addEventListener('click',function(){
  // find the input off the page
  var carInput = document.getElementById('car');
  //console log the input value

  console.log(carInput.value);
})
