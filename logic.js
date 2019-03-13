/*All men are mortal
  Socrates is a man.
  Therefore, socrates is mortal.
*/

console.log('Check wether socrates is mortal or not ?');
//collection of item
let men = ['krishna', 'adi', 'socrates', 'arjun'];

let i = 0;
let l = men.length;

//loop for checking wether socrates is in the collection or not.
while(i < l){
  if(men[i] === 'socrates'){
    console.log('socrates is mortal');
    break;
  }
  else if(i === l-1) {
    console.log('socrates is immortal');
  }
  i = i + 1;
}

//------------------------------------------------------------------------------
//extra credit
console.log();
/*This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

console.log('This cake is of which flavour ?')

//cake object
let cake = {
  size : 'medium',
  color : 'black',
  flavour : 'vanila',
};

if(cake.flavour === 'chocolate' || cake.flavour === 'vanila'){
  if(cake.flavour !== 'chocolate'){
    console.log('Vanila');
  }
  else{
    console.log('Chocolate');
  }
}
else{
  console.log('Neither chocolate nor vanila');
}
