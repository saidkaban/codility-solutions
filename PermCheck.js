function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrSet = new Set(A);
    let distinctArr = [...arrSet];
	distinctArr.sort((a, b) => a - b);
    if (distinctArr[0] !== 1) return 0;
    for (let i = 0; i < A.length - 1; i++) {
        if (distinctArr[i] + 1 !== distinctArr[i + 1]) {
			
            return 0;
        }
    }
    return 1;
}
