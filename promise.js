
function square(num){
    const start_time = new Date();
    console.log(num*num);
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([num, start_time]);
        }, num);
    });
}

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


square(400).then(([num, start_time]) =>{
    console.log(Math.sqrt(num));
    return [num, start_time];
}).then(([num, start_time]) =>{
    for(let i=num-1; i>=2; i-=1){
        if(prime(i)){
            console.log(i);
            break;
        } 
    }
    const end_time = new Date();
    console.log(`${end_time - start_time} miliseconds passed`);
})