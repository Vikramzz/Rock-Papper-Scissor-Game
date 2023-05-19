let cpu1 = Math.floor(Math.random()*3);
let cpu = ["Rock","Papper","Scissor"][cpu1]
let user = ""
let match = (cpu,user) =>{
    if(user === cpu){
        return "tie"
    }
    else if( user == "Rock" && cpu =="Papper"){
        return "CPU"
    }
    else if( user == "Rock" && cpu =="Scissor"){
        return "USER"
    }
    else if( user == "Papper" && cpu =="Scissor"){
        return "CPU"
    }
    else if( user == "Papper" && cpu =="Rock"){
        return "USER"
    }
    else if( user == "Scissor" && cpu =="Rock"){
        return "CPU"
    }
    else if( user == "Scissor" && cpu =="Papper"){
        return "USER"
    }
}

let cardR = document.getElementById("cardR")
let result ;
document.getElementById("rock").onclick = function(){
    user = "Rock";
    result = match(cpu,user);
    console.log(`Winner Is ${result}`);
    if(result == "USER"){
        cardR.innerHTML = `Congratulation <br> You Won <br> Computer = ${cpu} You = ${user}<br><button onclick="location.reload();">Play Again</button>` 
    }
          else if(result == "CPU"){
        cardR.innerHTML = `Better Luck Next Time <br> You Loose <br> Computer = ${cpu} You = ${user}<br><button onclick="location.reload();">Play Again</button>`
    }  
    else{
        cardR.innerHTML = ` Nice Try <br> Match Teid<br> Computer = ${cpu} You = ${user}<br><button onclick="location.reload();">Play Again</button>`
    }     
    cardR.style.display = "block";
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("tittle")[0].style.display = "none";
    
}
document.getElementById("papper").onclick = function(){
    user = "Papper";
    result = match(cpu,user);
    console.log(`Winner Is ${result}`);
    if(result == "USER"){
        cardR.innerHTML = `Congratulation <br> You Won <br> Computer = ${cpu} You = ${user} <br><button onclick="location.reload();">Play Again</button>` 
    }
          else if(result == "CPU"){
        cardR.innerHTML = `Better Luck Next Time <br> You Loose <br> Computer = ${cpu} You = ${user} <br> <button onclick="location.reload();">Play Again</button>`
    }  
    else{
        cardR.innerHTML = ` Nice Try <br> Match Teid<br> Computer = ${cpu} You = ${user} <br><button onclick="location.reload();">Play Again</button>`
    }     
    cardR.style.display = "block";
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("tittle")[0].style.display = "none";
    
    
}
document.getElementById("scissor").onclick = function(){
    user = "Scissor";
    result = match(cpu,user);
    console.log(`Winner Is ${result}`);
    if(result == "USER"){
        cardR.innerHTML = `Congratulation <br> You Won <br> Computer = ${cpu} You = ${user} <br> <button onclick="location.reload();">Play Again</button> ` 
    }
          else if(result == "CPU"){
        cardR.innerHTML = `Better Luck Next Time <br> You Loose <br> Computer = ${cpu} You = ${user} <br> <button onclick="location.reload();">Play Again</button>`
    }  
    else{
        cardR.innerHTML = ` Nice Try <br> Match Teid<br> Computer = ${cpu} You = ${user} <br> <button onclick="location.reload();">Play Again</button>`
    }     
    cardR.style.display = "block";
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("tittle")[0].style.display = "none";
    
    
}
