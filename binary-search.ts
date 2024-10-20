// For Binary search we need a sorted data so that we can perform a simple compare with the middle element of the array
// If the middle element matches, then we have completed the query
// And if the compared element is smaller than the middle element, we take the left half of the array otehrwise right half of the array.
// Similarly we keep on doing it until we find the proper match
// Big O notation for Binary Search is log(n)
// 1/2N + 1/4N + 1/8N + .... = (N/2^k = 1) = log(N)
// Example: 4096,2048,1024,512,256,128,64,32,16,8,4,2,1. Now log 4096 = 12. The total elements till 1. And we are simply halfing the complete value

function BinarySearch(
  haystack: number[],
  needle: number,
): { exists: boolean; index: number } {
  let minPosition = 0,
    maxPosition = haystack.length;
  // Run an infinite loop until we either match condition or no index remaining to search
  do {
    const midPostion = Math.floor(
      minPosition + (maxPosition - minPosition) / 2,
    );
    if (haystack[midPostion] === needle) {
      return {
        exists: true,
        index: midPostion,
      };
    } else if (needle > haystack[midPostion]) {
      minPosition = midPostion;
    } else {
      maxPosition = midPostion;
    }
  } while (minPosition < maxPosition - 1);
  return {
    exists: false,
    index: -1,
  };
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 9], 9));
