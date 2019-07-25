# Description
There are 2 files, the index.js which contains the logic and the bitmap.txt which contains the bit maps.
Run the index.js file using node.js.


# Algorithm 
I didn't manage to solve the problem but here is the algorithm I tried:

I read the file line by line.
If it is the first line, then I check if the number of test cases is between 1 and 182.
If it's the second line, then I check if the size of the bitmap is correct.
If it's another line, then I start to process to calculate the distance.
  - if there is no "1" on the line, then I print the whole line and skip to the next one
  - if yes, then i'll check where is the first index of 1 and put the distance from the index 0 to the index of the first 1 found.
    then I keep doing this recursively until the end.
