
//( )=>5  어떠한 매개변수도 전달 받지 않고 5를 반환한다는 의미 입니다. 
let aF0 = ()=>5 ; // aF0는 화살표 함수를 가리킵니다. 
console.log(aF0()); // aF0를 이용하여 화살표 함수를 실행합니다. 




//(a,b)=> a+b;  매개변수 a,b를 전달받아  두 값을 더한 후 리턴합니다. 
let aF1 = (a,b)=>a+b;  // aF는 화살표 함수를 가리킵니다. 
console.log(aF1(3,5)); 


//(a, b)=>{  } 리턴없이 여러가지 를 실행할 때는 중괄호를 사용합니다. 
let aF2 = (a,b) => {
    console.log(a,'를 ',b,'로 나눈 몫은 ',parseInt(a/b),'입니다.')
    console.log(a,'를 ',b,'로 나눈 나머지는 ',a%b,'입니다.')
}
aF2(2,4);


