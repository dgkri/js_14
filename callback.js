function prime(num){
    if(num ===2 || num===3){
        return true;
    }
    for(let i=2; i<num; i+=1){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

function square(num, prime){
    let start_time = new Date();
    console.log(num*num);
    setTimeout(() =>{
        console.log(Math.sqrt(num));
        
        for(let i=num-1; i>=2; i-=1){
            if(prime(i)){
                console.log(i);
                break;
            } 
        }
        let end_time = new Date();
        console.log(`${end_time-start_time} miliseconds passed`);
    },num);
}

square(400,prime);