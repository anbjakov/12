
let promiseForHandling = new Promise(function (resolve,reject) {
    //setTimeout(()=>resolve('done'),5000);
    setTimeout(()=>reject(new Error('error msg')),5000);
});

promiseForHandling
    .then(
        (result)=>{
            console.log(result)
        }
    )
    .catch(
        (error)=> {
            console.log(error);
        }
    )
    .finally(
    ()=>console.log('Promise then/catch was finished!')
)

async function getPromiseAsyncHandling(){
    try{
       const result = await promiseForHandling;
       console.log(result);
    }
    catch (error) {
    console.log(error);
    }
    finally {
        console.log('Promise async/await was finished!')
    }
}
getPromiseAsyncHandling()

