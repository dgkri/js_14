// function for logging the ids
function show(){
  let _object = document.getElementsByTagName('div'); // getting the object with tagname "div"
  let l = _object.length; //calculating the length of the object, which is used in for loop

  for(let i=1 ; i<=l ; i+=1){ //using the for loop for for printing the IDs
    /* I used for loop here for traversing through the elements of _object and i used setTimeout function for
     setting the time for logging the ids */
    console.log("Here are the rectangle IDs")
    setTimeout(() =>{
      console.log(_object[i-1].id)
    }, i*1000)
  }
}
