// caratteri per comporre la password
let characters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=/<>?";
let button = document.querySelector('button');

function passwordGen() {
  let password = [];
  // per gestire la lunghezza
  for (let i = 0; i < 15; i++) {
    let index = Math.floor(Math.random() * characters.length);
    // index < characters.length
   
    password += characters[index];
 
  }
  return password;
}

let securePassword = document.querySelector('span');

// generatore al click
button.addEventListener('click', function(){
  let newPassword = passwordGen();
  securePassword.innerText = newPassword
  securePassword.classList.remove('hidden');
});

