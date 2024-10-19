//This is an Array, NOT a Slice. In Slice you can have dynamic size but in Array the size is fixed before hand

const a = new ArrayBuffer(6);
console.log(a);
// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
console.log(a8);
// Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]

a8[0] = 45;
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }

a8[2] = 45;
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
a16[2] = 0x4545;
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }
// Since we mentioned that we are usign 16 bit array, then for the new array, it's taking 2 initial spaces of 8bytes as a single index
// That's why even we are setting the 2nd index, the 5th and 6th index are updated.

console.log(a16);
// Uint16Array(3) [ 45, 45, 17733 ]
// Since we are setting the 0th index as 45 and second index 45, so 16 bit is calculating 0-2 as single space and 2-4 as single

// BigO notation for an Array:
// To perform a get query in a set sized array is O(1) as no matter what the size of array remains same and it does not increases the iteration.
// And with the fixed width and fixed datatype we do not have to do any iterations to get a particular index
// There are no methods such as Push and Pop of insertion in array as it's pretty much re-allocating the particular chunk of memory
