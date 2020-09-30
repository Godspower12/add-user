const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// Create an event listening
myForm.addEventListener('submit', onSubmit)

function onSubmit(e) { 
   e.preventDefault(); 
  // create a form validation against empty fields
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'please enter all fields';
// set a timer to remove the error msg     
setTimeout(()=> msg.remove(), 2000);
} else {
        // create a userlist to show all submitted data
         const li = document.createElement('li');
        // Create a textNode
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       // Append the li to the userList variable
         userList.appendChild(li);  
   
   
       // clear the fields
    nameInput.value = '';
    emailInput.value = '';  
}
};


