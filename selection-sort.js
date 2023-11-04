

function selectionSort(arr) {

  // Copy the original array
  let newArr = arr.slice()

  // Create an array to store the sorted values
  let selected = []
  // While the array is not empty...
  while (newArr.length) {
    // Do not move this console.log
    console.log(selected.join(","));
    boolean = true

    // Find the index of the minimum value in the unsorted half
    let min = newArr[0]
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i] < min) {
        // Save and remove the value at the min index
        min = newArr.splice(i, 1)
        boolean = false
      }
    }
    if (boolean) {
      min = newArr.splice(0,1)
    }


    // Add the min value to the end of the sorted array
    selected.push(min[0])
  }
  return selected
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let pointer = 0

  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = pointer
    for (let i = pointer; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i
      }
    }
    //Save the min value
    let minValue = arr[minIndex]

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = minIndex; j > pointer; j--) {
      arr[j] = arr[j-1]
    }
    // Put the min value at the divider
    arr[pointer] = minValue

    // Increment the divider and repeat
    pointer ++
  }
  return arr
}


module.exports = [selectionSort, selectionSortInPlace];
