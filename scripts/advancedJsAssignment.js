// function getData(uId) {
//     return new Promise((resolve, reject)=>{
//         try{
//             setTimeout(() => {
//                 console.log("Fetched the data!");
//                 resolve("skc@gmail.com");
//             }, 4000);
//         }
//         catch(err){
//             reject(new Error(err))
//         }
//     })
// }

// console.log("start");
// getData("skc").then(email=>console.log("Email id of the user id is: " + email));
// console.log("end");

async function getData(uId) {
    
    setTimeout(() => {
        console.log("Fetched the data!");
        return "skc@gmail.com";
    }, 4000);
        
}

var readEmail = async()=>{
    console.log("start");
    const email = await getData("skc")
    await console.log("Email id of the user id is: " + email)
    console.log("end");
};

readEmail();