const phrase = "hello world my name is Asher";

const names = ['asher', 'chloe', 'mama', 'dada']

// Function to select a random name
function selectRandomName(namesArray) {
  var randomIndex = Math.floor(Math.random() * namesArray.length);
  return namesArray[randomIndex];
}

// Call the function to select a random name
const randomName = selectRandomName(names);

// Display the random name
function myName() {
    console.log("Randomly selected name:", randomName);
}

myName();
