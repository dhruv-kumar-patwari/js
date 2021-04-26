
/*The below code uses only promises to solve the question*/


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


/*The below code uses async await to solve the question*/


async function getData(uId) {
    let email = await new Promise ((resolve) => setTimeout(() => {
                    console.log("Fetched the data!");
                    resolve("skc@gmail.com");
                    }, 4000));
    return {
        email:email
    }
}

console.log("start");
getData("skc").then(response => console.log("Email Received is: " + response.email))
console.log("end");
