let scoreHuman = 0 ;
let scoreComputer = 0 ;
//selección de Computer

const getComputerChoice = function (i) {
    
    if (i<= 0.33){
        
        return "tijera"
    } else if (i <= 0.66){
        
        return "piedra"
        
    }else if (i>=0.67){
        
        return "papel"
    } 
    
};

const getHumanCHoice = function(){
    
    let human = prompt ("ESCOGE ENTRE : PIEDRA PAPEL O TIJERA")
    
    return  human;
    
    
    
} ;


const playRound = function (choiceComputer,choiceHUman){
    
    if (choiceHUman === "tijera" && choiceComputer === "piedra"){
        
        return "La computadora gana"
    }else if (choiceHUman === "tijera"  && choiceComputer === "papel"){
        
        return "Felicidades has ganado esta ronda "
    }else if(choiceHUman === "tijera" && choiceComputer === "tijera") {
        
        return "Ohh habéis empatado nadie puntúa "
    }else if (choiceHUman === "piedra" && choiceComputer === "papel"){

        return "La computadora gana"
    }else if (choiceHUman === "piedra"  && choiceComputer === "tijera"){
        
        return "Felicidades has ganado esta ronda "
    }else if(choiceHUman === "piedra" && choiceComputer === "piedra") {
        
        return "Ohh habéis empatado nadie puntúa "
    }if (choiceHUman === "papel" && choiceComputer === "tijera"){
        
        return "La computadora gana"
    }else if (choiceHUman === "papel"  && choiceComputer === "piedra"){
        
        return "Felicidades has ganado esta ronda "
    }else if(choiceHUman === "papel" && choiceComputer === "papel") {
        
        return "Ohh habéis empatado nadie puntúa "
    }
    
}

const point = function(round ){
    
    if (round === "Felicidades has ganado esta ronda "){

        return scoreHuman = scoreHuman+1;   

    }else if (round === "La computadora gana") {
        
        return scoreComputer = scoreComputer+1;
        
    }
    
}

const playGame = function (){
    
    for(let i = 0 ; i<=4;  i++){
        
        
        const choiceComputer = getComputerChoice(Math.random());
        const choiceHUman = getHumanCHoice().toLowerCase();
        const round = playRound(choiceComputer,choiceHUman);
        const score = point(round);
        
        
        console.log(choiceHUman);
        console.log(choiceComputer);
        console.log(round);
        console.log(scoreComputer,scoreHuman);

    }
}




const game= playGame(1);


console.log(game);

