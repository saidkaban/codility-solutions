function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    const len = A.length;
    return Math.max(A[0] * A[1] * A[len - 1], A[len - 3] * A[len - 2] * A[len - 1]);
}