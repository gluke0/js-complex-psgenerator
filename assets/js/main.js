// caratteri per comporre la password
let characters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=/<>?";

function passwordGen() {
  let password = [];
  // per gestire la lunghezza
  for (let i = 0; i < 15; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

let securePassword = document.querySelector('body');

securePassword.innerHTML = passwordGen();
