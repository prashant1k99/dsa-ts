// We are going to perform a simple search on an Array
// For Linear search we check every index and do the comparison for the required condition to match.
// Example: Array.IndexOf()
// Big O notation:
// O(n) as it's a simple iteration on all the index

function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true;
    }
  }
  return false;
}

console.log("Has Needle:", linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 14));

// In this we are doing a linear search by simply looping over an array and comparing the value at every index and checing if the solution matches or not.
