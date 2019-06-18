// use of array destructuring
/* We can use array destructuring in any places, for example
1. If we want to create many variables at one time and assign them value
2. IF we want to flip the values of two variables
*/

// uses of object destructuring
/* object destructuring has great use, for example
1. creating may variables at a time and assigning them values from object
2. Used in function arguments, if we dont want to pass the whole object an only some part of it
*/

/* We can use both array and object destructuring for accessing variables from nested objects
   and nested arrays and also combination of both */


// Use of array destructuring
console.log("Array Destructuring");

const arr_obj = [1, 2, 3, 4];

let [one,,,four] = arr_obj;
console.log(`one: ${one} four: ${four}`);

[one, four] = [four, one];

console.log(`one: ${one} four: ${four}`);

const [first, ...rest] = arr_obj ;
console.log(`first: ${first} Rest: ${rest}`);

function logging(x, ...dont_know){
    console.log(x);
    for( const i of dont_know){
        console.log(i);
    }
}

logging(5, 10,  15, 20);
/* ----------------------------------------------- */

// Use of object destructuring
console.log("Object Destructuring");

const obj = { q:'q', w:'w', e:'e', r:'r',};

let {q: Q, w:W} = obj;

console.log(Q, W);

const students = {
    I: {name: 'k',
        roll_no: '1',
        subjects: ['math', 'phy', 'chem'],
        },

    II: {
        name: 'A',
        roll_no: '2',
        subjects: ['eng', 'bio', 'phy'],
        },
    III: {
        name: 'S',
        roll_no: '3',
        subjects: ['comp', 'math', 'business'],
    },
}

const {I:{name : student1}, II:{name: student2}} = students;

console.log(student1, student2);

const { I:{subjects:[sub_1,sub_2,sub_3]} } = students;
console.log(`subjects of student1 are: ${sub_1}, ${sub_2} and ${sub_3}`);

