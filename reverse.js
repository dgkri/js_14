// function definition

function reversejsonArray(str){
    try{
        
        let arr = JSON.parse(str);
        let new_arr = [];

        let i = arr.length - 1;
        for(; i>=0; i-=1){
            new_arr.push(arr[i]);
        }
        new_arr = JSON.stringify(new_arr);
        
        return new_arr;
         
    }
    catch(e){
        // console.log(e);
        return false;
    }
}

let _a = [1, 2, 3, 4];
a = JSON.stringify(_a);

// with proper stringified array
let rev_a = reversejsonArray(a);
console.log(rev_a);

// with an array not stringified
let b = reversejsonArray(_a);
console.log(b);

// with no argument
console.log(reversejsonArray());

// with bool
console.log(reversejsonArray(true));

//with string
console.log(reversejsonArray("hello"));
