
function makeRequest(location) {

    return new Promise( (resolve, reject)=> {

        console.log(`Making Request to ${location}`)

        if(location==='nowcoding') {
            resolve('hi')
        } else {
            reject('에러발생')
        }

    })
};

function processRequest( res ) {
    return new Promise( (resolve, reject)=> {
        console.log('Processing response')
        resolve(`추가정보 + ${res}`)
    })
};


console.log('start');

makeRequest('abc').then( (message)=>{
    console.log(message)
    return  processRequest(message)

}).then((msg)=> {
    console.log(msg);
}).catch(err=> {
    console.log(err)
})

console.log('end')
