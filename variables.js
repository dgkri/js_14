// var, let and const
// Basically all three of them are containers for storing Data.

console.log("For var:");
//var
//var can be also accessed outside the scope of the variable.
//Example:
if(true){
  var dogType = "Pug";
  console.log(dogType);
  if(true){
    //this is the scope of the var dogType
    var dogType = "Bull Dog";
  }
  //but we are also able to access it(dogType) outside its scope.
  console.log(dogType); //this will print Bull Dog not Pug.

  // we are also able to change its value.
  dogType = "German Shepherd";
  console.log(dogType);

}

console.log();
console.log("For Let:");
//let
//let cannot be accessed outside its scope.
//Example:
if(true){
  let dogType = "Pug";
  console.log(dogType);
  if(true){
    //this is the scope of the var dogType
    let dogType = "Bull Dog";
  }
  //here we will not be able to access the inner variable(Bull Dog),this will print Pug.
  console.log(dogType);
}

console.log();
console.log("For const:");
//const
//const cannot be accessed outside its scope, and also we cannot change its value.
//const will behave, same as let, but only we can't change its value.
//Example:
if(true){
  const dogType = "Pug";
  console.log(dogType);
  if(true){
    //this is the scope of the var dogType
    const dogType = "Bull Dog";
  }
  //here we will not be able to access the inner variable(Bull Dog),this will print Pug.
  console.log(dogType);

  // we cannot change its value also, so this will show some error.
  dogType = "German Shepherd";
  console.log(dogType);

}
