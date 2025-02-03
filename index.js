let scoreHuman = 0 ;
let scoreComputer = 0 ;
//selección de Computer

const getComputerChoice = function (i) {
    
    if (i<= 0.33){
        
        return "tijeras"
    } else if (i <= 0.66){
        
        return "piedra"

    }else if (i>=0.67){
        
        return "papel"
    } 
    
};

const getHumanCHoice = function(){

    let human = prompt ("ESCOGE ENTRE : PIEDRA PAPEL O TIJERA")
    
    return human;

    

} ;

const choiceComputer = getComputerChoice(Math.random());
const choiceHUman = getHumanCHoice().toLowerCase();

console.log(choiceComputer);
console.log(choiceHUman);

