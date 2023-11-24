// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById('userGuess').value);

  // Get the message element
  const message = document.getElementById('message');

  // Check if the user's guess is correct, too high, or too low
  if (userGuess === randomNumber) {
    message.style.color = 'green';
    message.textContent = "Yes You are correct you 👽";
  } else if (userGuess < randomNumber) {
    message.style.color = 'pink';
    message.textContent = "you went to 👇🏻 LOW";
  } else {
    message.style.color = 'blue';
    message.textContent = "You went to HIGH 🎈";
  }
}