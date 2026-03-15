// array
const products=[
    {
    name: "product one",
    price:677,
    discount:7,

    },
    {
        name: "product 2",
        price:6778,
        discount:7.9,
    
        },
        {
            name: "product 3",
            price:6700,
            discount:74.9,
        
            },

]
const result = products.map((productInfo,i)=>{
    productInfo.disAmt= (productInfo.price* productInfo.discount)/100
    productInfo.afterDis= productInfo.price-productInfo.disAmt
    return productInfo
})
let prodList= products.filter((val)=>{
    return val.price> 1000
})
console.log(prodList) // undefined



// sum of elements of num array
let num = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
//
for(let i = 0; i < num.length; i++){
    sum += num[i];
}
//
//console.log(sum);

//numb.forEach((num)=>{
  //  sum+= num
//})
//console.log(sum)





// IIFE  immediatly invoked 
const func = ()=>{};

(()=>{
    console.log("always triggered without call ")
})();
