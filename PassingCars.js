function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ones_above = 0, total_passing = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] === 0) {
            total_passing += ones_above;
            if (total_passing > 1000000000) {
                return - 1;
            }
        } else {
            ones_above++
        }
    }
    return total_passing;
}