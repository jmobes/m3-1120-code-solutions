/* eslint-disable no-unused-vars */
function isAnagram(first, second) {

  function sort(string) {
    const arr = string.split(' ').join('').split('');
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    }
    while (swapped);

    return arr.join('');
  }
  return sort(first) === sort(second);
}
