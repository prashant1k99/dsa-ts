// Running time for the Bubble Sort is (n^2)
// We have to execute the code for every iternation n to 1 and n times:
// (n+1)(n/2) = n(n+1) / 2 = O(n^2) as we remove the non significant numbers such as constant 2 and n

function bubbleSort(input: number[]): number[] {
  for (let i = 0; i < input.length; i++) {
    // Since the till i it will be sorted in the end
    for (let j = 0; j < input.length - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        const tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
      }
    }
  }
  return input;
}

console.log(bubbleSort([1, 4, 2, 7, 9, 10, 4, 8, 6]));
// [1,2,4,4,6,7,8,9,10]
