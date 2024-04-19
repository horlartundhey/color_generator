const numbAndLett = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonGenerate = document.getElementById("generate-color");
let firstcolorbox = document.getElementById('color-box-1');
let firstHexCode = document.getElementById("hex-code-1");

let secondColorBox = document.getElementById('color-box-2');
let secondHexCodeText = document.getElementById('hex-code-2');

let thirdColorBox = document.getElementById('color-box-3');
let thirdHexCodeText = document.getElementById('hex-code-3');

// let randomNumber = Math.floor(random()*10)

// Math.random();
function generateRandNumber(){
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber
}

buttonGenerate.addEventListener("click", function(){
    let hexCodeFirstBox = "#"  
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        let randomHex = numbAndLett[generateRandNumber()]
        hexCodeFirstBox += randomHex
    }

    firstcolorbox.style.backgroundColor = hexCodeFirstBox;
    firstHexCode.innerHTML = hexCodeFirstBox;
    firstHexCode.style.color = "white"


    let hexCodeForSecondBox = "#"
    for(let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++){
        let secondRandomHex = numbAndLett[generateRandNumber()]
        hexCodeForSecondBox += secondRandomHex
    }

    secondColorBox.style.backgroundColor = hexCodeForSecondBox;
    secondHexCodeText.innerHTML = hexCodeForSecondBox;
    secondHexCodeText.style.color = "white";

    let hexCodeForThirdBox = "#"
    for(let thirdLoop = 0; thirdLoop < 6; thirdLoop++){
        let randomThird = numbAndLett[generateRandNumber()]
        hexCodeForThirdBox += randomThird
    }

    thirdColorBox.style.backgroundColor = hexCodeForThirdBox;
    thirdHexCodeText.innerHTML = hexCodeForThirdBox;
    thirdHexCodeText.style.color = "white";
    
})

// Add event listeners to color boxes
firstcolorbox.addEventListener("click", function () {
    copyToClipboard(firstHexCode.textContent);
});

secondColorBox.addEventListener("click", function () {
    copyToClipboard(secondHexCodeText.textContent);
});

thirdColorBox.addEventListener("click", function () {
    copyToClipboard(thirdHexCodeText.textContent);
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Color copied to clipboard: " + text);
}

