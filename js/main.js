
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`)
    }
  }

document.getElementById('userInput').addEventListener('input', showInput)
function showInput() {
        let answer = document.getElementById('userInput').value 
        document.getElementById('show').innerHTML = `you eneterd ${answer}`
      
  }