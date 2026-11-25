let n = 121

let temp = n;
let reverse = 0;

while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (n === reverse) {
    console.log("yes");
} else {
    console.log("no");
}