
const table = document.querySelector('#tab');
const back_btn = document.querySelector('#back');
const re_btn = document.querySelector('#restart');
const game_result = document.querySelector('div');
let child = table.children[0].querySelectorAll('th');



let x = 0;
let _event= [];
let game = "";

table.addEventListener('click',function(e){
  if(e.target.tagName == 'TH' && e.target.innerHTML == ''){
    _event.push(e);

    if(x%2 === 0){
      e.target.innerHTML = '<h2 style = "color:red">O</h2>';
      x+=1;
    }
    else{
      e.target.innerHTML = '<h2>X</h2>';
      x+=1;
    }
  }

  if(x>=5){game = check(child);}

  if(game || x===9){
    if(game === ''){
      game_result.innerHTML = "Draw";
      game_result.style.display = 'block';
    }
    else{
      game_result.innerHTML = "Game Won BY " + game ;
      game_result.style.display = 'block';
    }
  }
  
})

back_btn.addEventListener('click', function(e){
  if(game){
    return 0;
  }
  if(x){
    _event[x-1].target.innerHTML = '';
    x-=1;
    _event.pop();
  }
})

re_btn.addEventListener('click',function(e){

  game_result.innerHTML = '';
  game_result.style.display = 'none';
  game = '';

  while(x){
    _event[x-1].target.innerHTML = '';
    _event[x-1].target.style.backgroundColor = 'orange';
    x-=1;
    _event.pop();
  }
})

function check(){
  for(let i=0;i<9;i+=3){
    if(child[i].innerHTML && child[i].innerHTML === child[i+1].innerHTML &&
    child[i].innerHTML === child[i+2].innerHTML  ){
      child[i].style.backgroundColor = 'green';
      child[i+1].style.backgroundColor = 'green';
      child[i+2].style.backgroundColor = 'green';
      
    
      return child[i].textContent;
    }
  }
  for(let i=0;i<3;i+=1){
    if(child[i].innerHTML && child[i].innerHTML === child[i+3].innerHTML &&
      child[i].innerHTML === child[i+6].innerHTML ){
        child[i].style.backgroundColor = 'green';
        child[i+3].style.backgroundColor = 'green';
        child[i+6].style.backgroundColor = 'green';
        
        
        return child[i].textContent;
      }
  }
  if(child[0].innerHTML && child[0].innerHTML === child[4].innerHTML &&
    child[0].innerHTML === child[8].innerHTML){
      child[0].style.backgroundColor = 'green';
      child[4].style.backgroundColor = 'green';
      child[8].style.backgroundColor = 'green';
      
      
      return child[0].textContent;
    }
  else if(child[2].innerHTML && child[2].innerHTML === child[4].innerHTML &&
    child[2].innerHTML === child[6].innerHTML){
      child[2].style.backgroundColor = 'green';
      child[4].style.backgroundColor = 'green';
      child[6].style.backgroundColor = 'green';
      
      
      return child[2].textContent;
    }
  else{
    return "";
  }
}