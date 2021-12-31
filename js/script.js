function computerPlay(){
    const random = Math.floor(Math.random()*3);
    switch(random){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            return computerPlay();
            
    }
}
/*
while(true){
    var playerSelection = prompt('Enter selection');
    if(!!playerSelection.match(/paper\b/i)){
        playerSelection='paper';
        break;
    }else if(!!playerSelection.match(/rock\b/i)){
        playerSelection='rock';
        break;
    }else if (!!playerSelection.match(/scissor/i)){
        playerSelection='scissor';
        break;
    }else 
        alert('Enter a valid selection.')
}
*/
var win;

function round(playerSelection, computerSelection){
    switch(true){
        case playerSelection==='rock' && computerSelection==='scissor':
            win=true;
            return 'You Win! Rock beats Scissors';
        case playerSelection==='rock' && computerSelection==='paper':
            win=false;
            return 'You Lose! Paper beats Rock';
        case playerSelection==='paper' && computerSelection==='rock':
            win=true;
            return 'You Win! Paper beats Rock';
        case playerSelection==='paper' && computerSelection==='scissor':
            win=false;
            return 'You Lose! Scissors beats Paper';
        case playerSelection==='scissor' && computerSelection==='paper':
            win=true;
            return 'You Win! Scissors beats Paper';
        case playerSelection==='scissor' && computerSelection==='rock':
            win=false;
            return 'You Lose! Rock beats Scissors';
        default:
            win='draw';
            return "It's a draw!";
    }
}

function game(){
    let playerScore=0;
    let cpuScore=0;
    for(let i=0; i<5; i++){
        while(true){
            var playerSelection = prompt('Enter selection');
            if(!!playerSelection.match(/paper\b/i)){
                playerSelection='paper';
                break;
            }else if(!!playerSelection.match(/rock\b/i)){
                playerSelection='rock';
                break;
            }else if (!!playerSelection.match(/scissor/i)){
                playerSelection='scissor';
                break;
            }else 
                alert('Enter a valid selection.')
        }
        console.log(round(playerSelection, computerPlay()))
        switch(win){
            case true:
                ++playerScore;
                break;
            case false:
                ++cpuScore;
            default:
                break;
        }
        console.log(`Scores: Player=${playerScore}, CPU=${cpuScore}`);
    }
    console.log(`The final score is: Player=${playerScore}, CPU=${cpuScore}`);
}

game();