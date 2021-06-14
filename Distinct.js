function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let distA = [...new Set(A)];
    return distA.length;
}