const userEmail = document.getElementById("inptEmail");
const userPassword = document.getElementById("inptPswd");
const saveButton = document.getElementById("btnSave");
const userResponse = document.getElementById("userResponse")

// applying functionaltiy to our button
// This line adds a listener to our button, when it gets clicked it will execute the function btnSaveClick
saveButton.addEventListener('click', btnSaveClick);

// since we added the listener, our button wil now execute a function when clicked!
// we now have to define which actions our button will do when clicked
function btnSaveClick(){
  let name = userEmail.value;
  let password = userPassword.value
  console.log(name, password)

  /*The next line is a little tricky 
  -> Our button when clicked now grabs the value of our variables and prints them on the console!
  -> However it doesn't display it on the user's screen :(
  -> Since the visual part is HTML job we have to link our JS function to a HTML placeholder that will recieve our info
  -> to do that we first need to call the division ID where we want the info to be placed, in this case its userResponse
  -> then we add in our division a paragraph (refered as p p/) containg the values of the variables in the function
  -> ITS DONE :) you've successfully managed to link the JS to the HTML ;)
  */
  userResponse.innerHTML += `<p> ${name}, ${password}<p/>`
}