function replaceString(data) {
    let replacedStr = /stun/g;
    return data.replace(replacedStr, 'stump');
}


let a = 'abc';
console.log(a.slice(-2, -1));