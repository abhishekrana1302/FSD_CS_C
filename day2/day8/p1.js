async function orderfood(name,time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("order for "+name+"has been prepared");
        },time);
        
    });
    
}

async function restuarant() {
    console.log("order food");
    let pizza=await orderfood("Pizza",2000);
    console.log(pizza);
    let burger=await orderfood("burger",3000);
    console.log(burger);
    let noodles=await orderfood("noodles",4000);
    console.log(noodles);
    console.log("all order prepared");
    
    
}
restuarant();
