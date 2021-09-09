const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// the field class
class Field {
  constructor(field){
    this._field = field;
    this.y = 0;
    this.x = 0;
  }

  get field(){
    return this._field;
  }

  // print method prints out field
  print(){
    return this.field.map(row=>{
      row.join('')
    }).join('\n');
  }

  // this method prompts user for input
  promptUserInput(){
    let move = prompt("Which direction do you want to move to? Enter U/u for up, D/d for down, L/l for left and R/r for right!");
    if (move.toUpperCase() === 'U' || move.toLowerCase() === 'u'){
      console.log('Moving up!');
      this.y -= 1;
    }
    else if (move.toUpperCase() === 'D' || move.toLowerCase() === 'd'){
      console.log('Moving down!');
      this.y += 1;
    }
    else if (move.toUpperCase() === 'L' || move.toLowerCase() === 'l'){
      console.log('Moving left!');
      this.x -= 1;
    }
    else if (move.toUpperCase() === 'R' || move.toLowerCase() === 'r'){
      console.log('Moving right!');
      this.x += 1;
    }
    else {
      console.log('Invalid entry!!');
    }

  }

  // this method determines winner of loser
  determineWinner(){
    if (this.field[this.y] == undefined){
      console.log('Out of bounds');
      return currentlyPlaying = false;
    }

    if (this.field[this.y][this.x] === hole){
      console.log('You lose! You fell in a hole.');
      currentlyPlaying = false;
    }
    else if (this.field[this.y][this.x] === hat){
      console.log('You win! You found the hat.');
    }
    
    else if (this.field[this.y][this.x] === fieldCharacter){
      console.log('Keep searching for the hat.');
      this.field[this.y][this.x] = pathCharacter;
    }

    else if (this.field[this.y][this.x] === pathCharacter){
      console.log('You stepped on *');
    }
  }

  

  

  

} 






