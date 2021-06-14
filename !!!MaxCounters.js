function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counterArr = Array(N).fill(0);
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            counterArr[A[i] - 1] += 1;
        } else if (A[i] >= N) {
            let maxCounter = Math.max(...counterArr);
            counterArr = counterArr.fill(maxCounter);
        }
    }
    return counterArr;
}