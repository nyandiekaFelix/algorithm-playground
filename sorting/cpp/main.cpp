#include <iostream>
#include "sorting.hpp"

void SortingAlgorithms::print_array(int array[], int size) {
  std::cout << "[";

  for (int index = 0; index < size; index++) {
    std::cout << array[index] << ", ";
  }

  std::cout << "]\n" << std::endl;
}

int main() {
  int arr[12] = {23, 6, 0, 34, 370, 950, 25, 2, 49, 224, 62, 15};
  int arr_size = (sizeof(arr) / sizeof(arr[0]));

  SortingAlgorithms::bubble_sort(arr, arr_size);

  return 0;
}
