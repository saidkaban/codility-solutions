function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = [...new Set(A)];
    A = A.filter(el => el > 0);
    if (A.length === 0) return 1;
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length + 1; i++) {
        if (A[i] === i + 1) {
            continue;
        } else {
            return i + 1;
        }
    }
}