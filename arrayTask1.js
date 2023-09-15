const myArray = [];

myArray.push(`Apple` , `Banana `, `Cherry`);

const first = myArray[0];
console.log (first);

const last = myArray[myArray.length-1];
console.log (last);

myArray.unshift ('Mango');
console.log(myArray);

myArray.pop();
console.log(myArray);

const numbers = [5 , 10 , 15 ,20 ,25];
numbers.splice(2, 1);
console.log(numbers);


function par (a){
    return a.length;
}
console.log(par([5 , 6 ,7]));

const temperatures = [72, 68, 74, 80, 76];
console.log(Math.max(...temperatures));

if (myArray.includes(`Banana`)){
    return true;
}
else {
    return false;
}