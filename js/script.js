function backToHome() {
    document.getElementById("displayContent").style = "display: block;"
    document.getElementById("gameContent").style = "display: none;"  
}

function restart() {
    
}

 function display() {
    document.getElementById("gameContent").style = "display: block;"
    document.getElementById("displayContent").style = "display: none;"
    document.getElementById("instructionMenu").style = "display: none;"
    document.getElementById("gameInformation").style = "diaplsy: none;"
    document.getElementById("closeHint").style = "display: none;"
}
function displayGameInformation() {
    document.getElementById("instructionMenu").style = "display: block;"
    document.getElementById("gameInformation").style = "diaplsy: block;"
    document.getElementById("closeHint").style = "display: block;"
}

function hintClose() {
    document.getElementById("displayContent").style = "display: block;"
     document.getElementById("instructionMenu").style = "display: none;"
    document.getElementById("gameInformation").style = "diaplsy: none;"
    document.getElementById("closeHint").style = "display: none;"
}


var randomNumber = Math.floor(Math.random() * 100);
   

var amountOfChances = 4;

var btn = document.getElementById("submitUserInput")
btn.addEventListener("click", function(e) {
    e.preventDefault();
    var inputNum = document.getElementById("userInput").value;
    
    var respone = document.getElementById("showCase");
    console.log(respone)
        if(inputNum == randomNumber) {
            respone.innerHTML = "WIN";    
        }
        
        else if (inputNum > randomNumber) {
            amountOfChances --;
     
            respone.innerHTML = "TOO HIGH "  + amountOfChances + " LEFT";
        }
    
        else if (inputNum < randomNumber) {
            amountOfChances --;
    
            respone.innerHTML = "TOO LOW " + amountOfChances + " LEFT";
        }
    
        else if (isNaN (inputNum)) {
            respone.innerHTML = "INVALID " + amountOfChances + " LEFT";
    
        }


        if (amountOfChances == 0) {
            respone.innerHTML = "LOSE";
        }    
});


