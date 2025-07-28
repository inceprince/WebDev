// function searchfood(items, cb1) {
//   console.log("Searching start for", items, "...");
//   setTimeout(function timer1() {
//     let data = `list of ${items}`;
//     cb1(items, data);
//   }, 3000);
// }
// searchfood("dosa",function(item,data){
//     console.log(item);
//     console.log(data);

// })

function searchfood(item,listitems) {
  return new Promise(function fun1(res, rej) {
    console.log("searching start for", listitems, "....");
    setTimeout(function timer1() {
      let listItems = `list of ${listitems}`;
      // Option 1: Return multiple values in an array
      // res([data, item]);

      //Option 2: Return multiple values in an object
      res({ listItems, item });
      res({ listItems, item });//inversion of control (it will not called as the promise is settled)
    }, 3000);
  });
}

//Orderfood

function orderFood(item) {
  return new Promise(function func2(res, rej) {
    console.log("Select", item);
    setTimeout(function timer2() {
      let id = Math.floor(Math.random() * 999999);
      res({ id, item });
    }, 4000);
  });
}
//Paymnet
function payment(item, id) {
  return new Promise(function func3(res, rej) {
    console.log(`Payment starting for ${item} with id no :`, id);
    setTimeout(function timer3() {
      let status = true;
      res({id,status});
    }, 6000);
  });
}
//Delivery
function delivery(id) {
  return new Promise(function (res, rej) {
    console.log("Order on the way", id);
    setTimeout(function timer4() {
      let mssg = "Order deliverd";
      res(mssg);
    }, 10000);
  });
}

//Async(Promise Chaining)
let result = searchfood("Poha","Indian Snack")
  .then(function Consume1(food) {
    console.log(food.listItems);
    return orderFood(food.item);
  })
  .then(function Consume2(detailFood) {
    console.log("Order Created Successfully for Id Number:", detailFood.id);
    return payment(detailFood.item, detailFood.id);
  })
  .then(function consumer3(orderDetail) {
    console.log("Payment Successfull with status", orderDetail.status);
    return delivery(orderDetail.id);
  })
  .then(function consumer4(mssg){
    console.log(mssg);
  });
