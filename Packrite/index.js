const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

//document.getElementById("myForm").addEventListener("submit", function(event) {
    //var emailInput = document.getElementById("email");
    //var passwordInput = document.getElementById("password");
    
    //if (!emailInput.value || !passwordInput.value) {
      //alert("Please fill in all required fields.");
      //event.preventDefault(); // Prevent the form from submitting
   // }
 // });

  const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('myForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
document.getElementById("myForm").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    
    if (!emailInput.value || !passwordInput.value) {
      alert("Please enter both email and password.");
      event.preventDefault(); // Prevent the default form submission
    }
  });
  
  
  
  
  