let p = new Promise (  (resolve, reject) => {

    let a = 1 + 2;
    
    if(a == 2) { 
        resolve('succeed');
    } else {
        reject('Failed');
    }

});


p.then(
    (message)=>console.log (' in the then '+message)
).catch(
    (message)=>console.log(' in the catch '+message)
).finally(
    ()=>console.log('end of promise')
)

