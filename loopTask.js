for (let index =1; index<=10;index++)
{
    console.log(index);
}

for (let index =1; index<=20; index++)
{
    if (index %2 == 0)
    {
    console.log(index);
    }
}

let i = 1 , sum = 0;
while (i<=100){
    sum = sum + i;
    i++;
}
console.log(sum);

const nums2 = [1 , 2 ,3 , 4 ,5];
let sum2 = 0 ;
for (let i2 = 0; i2 < nums2.length; i2 ++){
sum2 += nums2[i2];
}
console.log(sum2);