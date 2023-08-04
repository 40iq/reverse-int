module.exports = function reverse (n) {
    let result = '';
    let sliceN = Math.abs(n).toString();
    for (let i = 0; i < sliceN.length; i += 1) {
        result = `${sliceN[i]}${result}`;
    }
    return result;
}

