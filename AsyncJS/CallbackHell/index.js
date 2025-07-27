/*function searchFood(items){
    console.log("Searching start for",items,"......");
    setTimeout(function timer1(){
        let data=`list of ${items}`;
       return data;
    },3000);

}
let res=searchFood("Salad");
console.log(res);*/

// output-->
/* Searching start for Salad ......
 undefined*/
// the reason res is undefined is because setTimeout is asynchronous, and the return data inside it does not return from the searchFood -->To Avoid this return data as undefined we use callback function.





//callback function
//Search food
function searchFood(items, cb1) {
  console.log("Searching Start for", items, ".....");
  setTimeout(function timer1() {
    let data = `list of ${items}`;
    cb1(items, data);
  }, 3000);
}

//order food.
function orderFood(item, cb2) {
  console.log("Select", item);
  setTimeout(function timer2() {
    let id = Math.floor(Math.random() * 999999);
    cb2(id);
  }, 4000);
}
//payment
function payment(items,id,cb3){
    console.log(`Payment starting for ${items} with id no :`,id);
    setTimeout(function timer3(){
        let status=true;
        cb3(status);

    },6000);
}

//delivery
function delivery(id,cb4){
    console.log("Order on the way",id);
    setTimeout(function timer4(){
        let mssg="Order deliverd";
        cb4(mssg);
    },10000);
}





let res = searchFood("salad", function func1(items, data) {
  console.log(data);
  orderFood(items, function func2(orderId) {
    console.log("order created successfully with id no:", orderId);
    payment(items,orderId,function func3(response){
        console.log("Payment successful with status",response);
        delivery(orderId,function func4(message){
            console.log(message);
        })

    })
  });
});
