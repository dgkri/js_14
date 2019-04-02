// function for logging the ids
function show(){
  let _object = document.getElementsByTagName('div'); //getting the object
  let l = _object.length; //calculating the length of the object

  for(let i=1 ; i<=l ; i+=1){ //using the for loop for for printing the IDs
    console.log("Here are the rectangle IDs")
    setTimeout(() =>{
      console.log(_object[i-1].id)
    }, i*1000)
  }
}
