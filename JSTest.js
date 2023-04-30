//Cyron Zoe Anas - A07-12 STEM-S2-1

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myPets = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _type, _color, _likes, _dislikes) {
     const pet = {
      "Name": _name,
      "Type": _type,
      "Color": _color,
      "Likes": _likes,
      "Dislikes": _dislikes
   }
   myPets.push(pet);
   console.log("My Pet, " + _name + " <3");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i = 0; i < myPets.length; i++){
   console.log("\n" + "Pet#" + (i + 1));
   console.log("My name is " + myPets[i].Name);
   console.log("I am a " + myPets[i].Type);
   console.log("I am colored " + myPets[i].Color);
   console.log("I like to " + myPets[i].Likes);
   console.log("But I don't like to " + myPets[i].Dislikes);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\n" + "Amount of Pets: " + myPets.length);
}

// call your functions below this line
mintNFT("Bagel", "Cat", "Orange", "Sleep and Eat", "Play with others and Take Baths");
mintNFT("Jenny", "Cat", "Orange", "Play with others", "Sleep and Take baths");
mintNFT("Oreo", "Dog", "Black with white spots", "Sleep and Play", "Go for Walks and Take baths");
mintNFT("Kookie", "Dog", "Brown and Black", "Play and Go Outside", "Play with Cats and Take baths")
listNFTs();
getTotalSupply()
