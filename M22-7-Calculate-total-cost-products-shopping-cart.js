/*
const shoppingCart = [
    {name: 'Shirt',price: 1000},
    {name: 'Pant',price: 1200},
    {name: 'Underware',price: 200},
    {name: 'Tshirt',price: 800},
    {name: 'Lungi',price: 600}
   
   ];
   function totalCost(produts) {
    let sum = 0;
      for (let i = 0; i < produts.length; i++) {
       const product = produts[i];
       sum = sum + product.price;
       //console.log(product);
       
      } 
      return sum;
   
   }

   const allSum = totalCost(shoppingCart);
   console.log("Total expense today:",allSum);
*/

// multiple calculation:
const shoppingCart = [
    {name: 'Shirt',price: 1000,quantity: 2},
    {name: 'Pants',price: 1200,quantity: 3},
    {name: 'Uwares',price: 200,quantity: 2},
    {name: 'Tshirt',price: 800,quantity: 4},
    {name: 'Lungis',price: 600,quantity: 5},
   
   ];
   function totalCost(produts) {
    let sum = 0;
      for (let i = 0; i < produts.length; i++) {
       const product = produts[i];
       const productTotal = product.price * product.quantity;
       sum = sum + productTotal;
       //console.log(product);
       
      } 
      return sum;
   
   }

   const allSum = totalCost(shoppingCart);
   console.log("Total expense today:",allSum);


