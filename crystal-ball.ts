// 2 Crystal Ball Problem:
// Given 2 crystal balls that will break if dropped from high enough distance,
// Determine the exact spot in which it will break in the most optimized way.
// In this algorithm, the Big O notation for this implementation is Sqrt(n)

function breakingPointSearch(
  totalFloors: number,
  breakingPoint: number,
): { willBreak: boolean; floor: number } {
  const floorToJump = Math.floor(Math.sqrt(totalFloors));
  let currentFloor = floorToJump;

  for (; currentFloor < totalFloors; currentFloor += floorToJump) {
    console.log("At floor:", currentFloor);
    if (currentFloor >= breakingPoint) {
      console.log("First Crystal broken at Floor:", currentFloor);
      break;
    }
  }

  // Now we from the last breaking point we keep on adding moves
  currentFloor -= floorToJump;

  // Now we keep on incrementing the floors gradually
  for (; currentFloor < currentFloor + floorToJump; currentFloor++) {
    console.log("At floor:", currentFloor);
    if (currentFloor >= breakingPoint) {
      console.log("Second Crystal broken at Floor:", currentFloor);
      return {
        willBreak: true,
        floor: currentFloor,
      };
    }
  }

  return {
    willBreak: false,
    floor: -1,
  };
}

console.log(breakingPointSearch(1200, 72));
// At floor: 34
// At floor: 68
// At floor: 102
// First Crystal broken at Floor: 102
// At floor: 68
// At floor: 69
// At floor: 70
// At floor: 71
// At floor: 72
// Second Crystal broken at Floor: 72
// { willBreak: true, floor: 72 }
