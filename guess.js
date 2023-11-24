
const weirdNumber = Math.floor(Math.random() * 100) + 1;


const guess = () => {
    
    const userNumber = parseInt(document.getElementById("userNumber").value);
    
   
    const outputGuess = document.getElementById("outputGuess");
   
        
    if (userNumber === weirdNumber){
        message.style.color = 'green';
        outputGuess.textContent =  "Yes You are correct you 👽";
    } else if (userNumber > weirdNumber) {
        message.style.color = 'pink';
        outputGuess.textContent = "You went to HIGH 🎈";
    } else if (userNumber < weirdNumber) {
        outputGuess.textContent = "you went to 👇🏻 LOW";
        message.style.color = 'blue';
    } else {
        message.style.color = 'red';
        outputGuess.textContent = " Since it was not clear. AGAIN! Only enter number from 1-100";
    }
}

