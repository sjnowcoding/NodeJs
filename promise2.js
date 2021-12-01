
function Pr(sec) {

    return new Promise( (resolve, reject)=>{

        setTimeout( ()=> {
            resolve(new Date().toISOString())
        }, sec*1000)

    })


}

console.log('hello');


Pr(1).then( (result)=> {
    console.log(result);
    return Pr(1);
}).then( (result) => {
    console.log(result);
});

console.log('bye');




