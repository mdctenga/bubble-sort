var unsortedArray = [4, 3, 2, 7, 10, 6];

bubbleSort(unsortedArray);

function bubbleSort (unsortedArray){
  console.log(unsortedArray, " is in the function");

  for (var i = 0; i <= unsortedArray.length - 1; i += 1) {
    console.log("unsortedArray element " + i);
  };
}



console.log(unsortedArray);