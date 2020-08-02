const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
    return userInput;
    }else{
      console.log('Incorrect Input');
    }
}

// to check if input is fine
// getUserChoice('Enter Rock/Paper/Scissor');

function getComputerChoice(){
  let luckNum = Math.floor(Math.random()*3);
  
    switch(luckNum){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break; 
  }
  
}

//console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice){

  if(userChoice == computerChoice){
    console.log('It\'s a tie lol!');
  }else{
      if(userChoice == 'rock'){
        if(computerChoice == 'paper'){
          console.log('AI is going to take up world soon! Run for your life');
        } else{
          console.log('Congrats you won!');
        }
      }
     if(userChoice == 'paper'){
       if(computerChoice == 'scissors'){
          console.log('AI is going to take up world soon! Run for your life');
        } else{
          console.log('Congrats you won!');
          }
        }
    if(userChoice == 'scissors'){
      if(computerChoice == 'rock'){
          console.log('AI is going to take up world soon! Run for your life');
        } else{
          console.log('Congrats you won!');
          }   
       }
    }
}

determineWinner(getUserChoice('Scissors'), getComputerChoice());
