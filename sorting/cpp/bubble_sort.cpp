/*
  Algorithm: Bubble Sort
  Big O Notation: O(n^2)
  Overview:
*/

#include <algorithm>
#include <iostream>
#include "sorting.hpp"

namespace SortingAlgorithms {

void bubble_sort(int array[], int length) {
  std::cout << "Before Bubble Sort:\n";
  print_array(array, length);

  bool swapped;
  int i = 0;

  do {
    swapped = false;

    for (int index = 0; index < length - i - 1; index++) {
      if (array[index] > array[index + 1]) {
        std::swap(array[index], array[index + 1]);
        swapped = true;
      }
    }

    i++;
  } while (swapped);

  std::cout << "After Bubble Sort:\n";
  print_array(array, length);
}

}  // namespace SortingAlgorithms
