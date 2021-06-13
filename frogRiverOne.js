function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leaveArr = [true];
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X && !leaveArr[A[i]]) {
            leaveArr[A[i]] = true;
            counter++
        }
        if (counter === X) {
            return i;
        }
    }
    return -1;
}