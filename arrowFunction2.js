//setTimeout( 실행할 함수, 비동기 지연시간 ) 
// 비동기적으로 기다렸다가 등록된 함수를 mainprocess에 돌려줍니다. 

  setTimeout(
        ()=>{console.log('화살표함수 실행 ')}, 
        2000);




//조금 복잡해 보이는 코드 분석하기


console.log(new Date().toISOString()); // 코드를 실행할 때의 일시 출력

function A (delaySec, fA) { //지연시간과 함수를 전달받는 함수 A

    //1. 비동기 함수 등록하기 
    setTimeout(
        ()=> {

            fA( new Date().toISOString() ); // 익명의 화살표 함수가 callback 
        }, 
        
        delaySec*1000  // 2. 기다렸다가 익명의 화살표함수 를 돌려줌 
     );

}

A( 3, (result)=>{
    console.log(result);
});

// 요약하면 fA = (result)=>{console.log(result)} 가 됨

