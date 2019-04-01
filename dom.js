


function show(){
  let _object = document.getElementsByTagName('div');
  let l = _object.length;

  for(let i=1 ; i<=l ; i+=1){
    setTimeout(() =>{
      console.log(_object[i-1].id)
    }, i*1000)
  }
}
