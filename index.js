const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnOne = document.getElementById('pass-btn-one');
let btnTwo = document.getElementById('pass-btn-two');

console.log(randomCharacter)

function generatePass() {
    let randomIndexOne = Math.floor( Math.random() * characters.length );
    let randomIndexTwo = Math.floor( Math.random() * characters.length );
    let randomIndexThree = Math.floor( Math.random() * characters.length );
    let randomIndexFour = Math.floor( Math.random() * characters.length );
    let randomIndexFive = Math.floor( Math.random() * characters.length );
    let randomIndexSix = Math.floor( Math.random() * characters.length );
    let randomIndexSeven = Math.floor( Math.random() * characters.length );
    let randomIndexEight = Math.floor( Math.random() * characters.length );
    let randomIndexNine = Math.floor( Math.random() * characters.length );
    let randomIndexTen = Math.floor( Math.random() * characters.length );
    let randomIndexEleven = Math.floor( Math.random() * characters.length );
    let randomIndexTwelve = Math.floor( Math.random() * characters.length );
    let randomIndexThirteen = Math.floor( Math.random() * characters.length );
    let randomIndexFourteen = Math.floor( Math.random() * characters.length );
    let randomIndexFifteen = Math.floor( Math.random() * characters.length );

    btnOne.textContent = characters[randomIndexOne] + characters[randomIndexTwo] + characters[randomIndexThree] + characters[randomIndexFour] + characters[randomIndexFive] + characters[randomIndexSix] + characters[randomIndexSeven] + characters[randomIndexEight] + characters[randomIndexNine] + characters[randomIndexTen] + + characters[randomIndexEleven] + characters[randomIndexTwelve] + characters[randomIndexThirteen] + characters[randomIndexFourteen] + characters[randomIndexFifteen];

    let randomIndexSixteen = Math.floor( Math.random() * characters.length );
    let randomIndexSeventeen = Math.floor( Math.random() * characters.length );
    let randomIndexEighteen = Math.floor( Math.random() * characters.length );
    let randomIndexNineteen = Math.floor( Math.random() * characters.length );
    let randomIndexTwenty = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyOne = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyTwo = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyThree = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyFour = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyFive = Math.floor( Math.random() * characters.length );
    let randomIndexTwentySix = Math.floor( Math.random() * characters.length );
    let randomIndexTwentySeven = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyEight = Math.floor( Math.random() * characters.length );
    let randomIndexTwentyNine = Math.floor( Math.random() * characters.length );
    let randomIndexThirty = Math.floor( Math.random() * characters.length );

    btnTwo.textContent = characters[randomIndexSixteen] + characters[randomIndexSeventeen] + characters[randomIndexEighteen] + characters[randomIndexNineteen] + characters[randomIndexTwenty] + characters[randomIndexTwentyOne] + characters[randomIndexTwentyTwo] + characters[randomIndexTwentyThree] + characters[randomIndexTwentyFour] + characters[randomIndexTwentyFive] + characters[randomIndexTwentySix] + + characters[randomIndexTwentySeven] + characters[randomIndexTwentyEight] + characters[randomIndexTwentyNine] + characters[randomIndexThirty];
}

function clearBtn() {
    btnOne.textContent = "";
    btnTwo.textContent = "";
}