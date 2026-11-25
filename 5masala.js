let n = 13579
function HTTS(n, count = 0) {
    if (n == 0) {
        return count % 2 != 0
    }

    if (n % 10 % 2 == 0) {
        return 
    }

    return HTTS(Math.floor(n / 10), count + 1)
}

console.log(HTTS(n) ? "YES" : "NO")