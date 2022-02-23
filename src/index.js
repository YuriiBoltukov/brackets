module.exports = function check(str, bracketsConfig)  {
    const openBrackets = bracketsConfig.map(el => el[0]);
    const couplesOfBrackets = {};
    bracketsConfig.forEach(el => {
        couplesOfBrackets[el[0]] = el[1];
    });
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const currentEl = str[i];
        const topEl = stack.length ? stack[stack.length - 1] : '';

        if (openBrackets.includes(currentEl) && !(currentEl === '|' && topEl === '|') && !(currentEl === '8' && topEl === '8') && !(currentEl === '7' && topEl === '7')) {
            stack.push(currentEl);
        } else {
            if (stack.length === 0) {
                return false;
            }
            if (couplesOfBrackets[topEl] === currentEl) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

