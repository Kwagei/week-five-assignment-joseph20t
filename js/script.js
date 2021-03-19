function backToHome() {
    document.getElementById("displayContent").style = "display: block; background-color: darkolivegreen;"
    document.getElementById("gameContent").style = "display: none;"
    document.getElementById("mainContainer").style = "background-color: darkolivegreen;"  
    document.getElementById("content").style = "background-color:darkolivegreen;;"
}

function restart() {
    document.getElementById('showCase').innerHTML = "";
    document.getElementById('userInput').innerHTML = "";
}

 function display() {
    document.getElementById("gameContent").style = "display: block; background-color: darkolivegreen";
    document.getElementById("content").style = "background-color: darkolivegreen";
    document.getElementById("displayContent").style = "display: none";
    document.getElementById("instructionMenu").style = "display: none";
    document.getElementById("gameInformation").style = "diaplsy: none";
    document.getElementById("closeHint").style = "display: none";
    document.getElementById("mainContainer").style = "background-color: darkolivegreen";
}
function displayGameInformation() {
    document.getElementById("instructionMenu").style = "display: block"
    document.getElementById("gameInformation").style = "diaplsy: block"
    document.getElementById("closeHint").style = "display: block; background-color: blue "
}

function hintClose() {
    document.getElementById("displayContent").style = "display: block"
     document.getElementById("instructionMenu").style = "display: none"
    document.getElementById("gameInformation").style = "diaplsy: none"
    document.getElementById("closeHint").style = "display: none"
}


var randomNumber = Math.floor(Math.random() * 100);
   

var amountOfChances = 10;

var btn = document.getElementById("submitUserInput")
btn.addEventListener("click", function() {
  
    var inputNum = document.getElementById("userInput").value;
    
    var respone = document.getElementById("showCase");
        if(inputNum == randomNumber) {
            respone.innerHTML = "WIN";    
        }
        else if (amountOfChances == 0) {
            respone.innerHTML = "LOSE";
        }    
        
        else if (inputNum > randomNumber) {
            amountOfChances --;
     
            respone.innerHTML = "TOO HIGH "  + amountOfChances + " LEFT";
            var btn = document.getElementById("submitbtn")
            btn.addEventListener("click", function() {
                var userNum = document.getElementById("inputNumber").value;
                console.log(userNum);
            }); }
    
        else if (inputNum < randomNumber) {
            amountOfChances --;
    
            respone.innerHTML = "TOO LOW " + amountOfChances + " LEFT";
        }
    
        else if (isNaN (inputNum)) {
            respone.innerHTML = "INVALID " + amountOfChances + " LEFT";
    
        }

});


