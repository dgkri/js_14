//got all the element by query selector property
// got the table, tboth the buttons, also got that div as game_resut and also selected
// all the tr of the table
const table = document.querySelector('#tab');
const back_btn = document.querySelector('#back');
const re_btn = document.querySelector('#restart');
const game_result = document.querySelector('div');
let child = table.children[0].querySelectorAll('th');


//defined some global variables
// x for counting the total no. of steps that both the players have taken
// _event array for storing the click events
// game as an empty which will be filled by some value according to the result 
let x = 0;
let _event= [];
let game = "";

//Attatching the event listener to table and adding a function that fills that fills the 
// _event array by events and also changes the text of target tr
// this function also runs some other function by checking the appropriate condition
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
  // here x is >5 because if somebody have to win the total no of steps should be atleast 5.
  if(x>=5){game = check(child);}

  // if somebody won or the total no. of steps are over without any winner(draw), this code will execute.
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


//i also added event listeners to my both buttons, which do respective things as their name suggests.
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


// here check is a function which checks weather someone won the game or not and
// do things accordingly.
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