/*All men are mortal
  Socrates is a man.
  Therefore, socrates is mortal.
*/

//default collection of mortal mens
let mens = ['krishna', 'adi', 'socrates', 'arjun'];


//function for checking wether any person is mortal or not.
function mortal_or_not(name = 'Socrates', men = mens){ // putting default values
  let l = men.length;
  let i = 0;

  if(typeof(name) !== 'string'){ // checking wether given name is either a string or not
    console.log(name + ' is not a string');
  }
  else{
    while(i < l){
      if(name === men[i]){
        console.log(name + ' is mortal');
        break;
      }
      else if(i === l-1) {
        console.log(name + ' is immortal');
      }
      i = i + 1;
    }
  }
}

//Put any name whose you want to check mortality
Name = 'Bandu';
console.log('Check wether ' + Name + ' is mortal or not ?');
mortal_or_not(Name);

//------------------------------------------------------------------------------
//extra credit
console.log();
/*This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

// default cake object
let cake = {
  flavour : 'vanila',
  _is_chocolate : false,
};

//function for checking the flavour of the cake
function flavour_of_cake(Cake = cake, is_chocolate = false){
  if(is_chocolate){
    console.log("The flavour of the cake is chocolate");
  }
  else{
    console.log('The flavour of the cake is ' + Cake.flavour);
  }
}

console.log('This cake is of which flavour ?')
flavour_of_cake();
