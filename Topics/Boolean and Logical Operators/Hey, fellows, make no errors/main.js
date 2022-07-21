const obj = {}; //const 는 final

obj.name = 'hyun woo'; //근데 왜 property 가 add 될까
//final 은 reassign 이 안됨

//obj = {name : 'hyun woo'}; //요건 안됨

delete obj.name;

console.log(obj);