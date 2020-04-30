const { hash } = window.location; // destructuring the hash from window location
const message = atob(hash.replace('#', '')); // adding the message decoded to message variable// we remove the hash and we replace it with empty string and we decode the message

if(message){
  document.querySelector('#message-form').classList.add('hide'); //adding the class hide from the div with the id message-form  when we go to the created link so only the message will show up
  document.querySelector('#message-show').classList.remove('hide'); // removing the class hide from the div with the  id message-show,, to show up the message

  document.querySelector('h3').innerHTML = message; // adding the message in the h3
}

document.querySelector('form').addEventListener('submit', event => { // we select the form and when we submit it will prevent default behavior
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide'); // when we create the message will remove the div with this id
  document.querySelector('#link-form').classList.remove('hide'); // and we will show the link div with this id


  const input = document.querySelector('#message-input'); // selecting the input
  const encrypted = btoa(input.value); // we take the input value and we encode it

  const inputLink = document.querySelector('#link-input'); // we select the input
  inputLink.value = `${window.location}#${encrypted}`; // here we create the link adding the link with window.location plus adding the encrypted message
  inputLink.select(); // here we select the input link automaticially so we have just to press Ctrl + C to copy it.
});
