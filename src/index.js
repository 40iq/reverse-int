module.exports = function reverse(n) {
    let result = '';
    let sliceN = Math.abs(n);
    for (let i = 0; i < sliceN.length; i++) {
        result = `${sliceN[i]}${result}`;
    }
    return result;
}

console.log(reverse(2281));


