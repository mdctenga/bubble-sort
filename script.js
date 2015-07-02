var unsortedArray = [4, 3, 2, 7, 10, 6];


bubbleSort(unsortedArray);

function bubbleSort (unsortedArray){
  var swapped = false;

  console.log(unsortedArray, " is in the function");

  do {
    for (var i = 0; i <= unsortedArray.length - 1; i += 1) {
      // console.log("unsortedArray element " + i);
      var current = unsortedArray[i];
      var next = unsortedArray[i + 1];
      if (current > next) {
        // console.log("Bigger");
        var proxy = current;
        current = next;
        next = proxy;
      }
    }
  } while (console.log('hello'));
}



console.log(unsortedArray);