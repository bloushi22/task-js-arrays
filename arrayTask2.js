/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
    // Your code here
        return numbers.length % 2 !== 0;
      }
      
      // Testing the function
      console.log(isArrayLengthOdd([1, 2, 3]));
      console.log(isArrayLengthOdd([1, 2, 3, 4]));
    /**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
    function isArrayLengthEven(numbers) {
    // Your code here
    return numbers.length % 2 !== 0;
}

    // Testing the function
    console.log(isArrayLengthOdd([1, 2, 3]));
    console.log(isArrayLengthOdd([1, 2, 3, 4]));
    
    /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
    function addLailaToArray(instructors) {
    // Your code here
        const newArray = [...instructors, "Laila"];
        return newArray;
      }
      
      // testing
      const instructors = ["Mshary", "Hasan"];
      const newArray = addLailaToArray(instructors);
      console.log(newArray);
    /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
    function eliminateTeam(teams) {
    // Your code here
    if (teams.length > 0) {
        const removedTeam = teams.pop();
        return removedTeam;
      } else {
        return "empty";
      }
    }
    
    // Testing
    const teams = ["Brazil", "Germany", "Italy"];
    const removedTeam = eliminateTeam(teams);
    console.log(removedTeam);
    console.log(teams);

    
    /**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
    function secondHalfOfArrayIfItIsEven(fruits) {
    // Your code here
    const length = fruits.length;

   if (length % 2 === 0 && length > 0) {
      const middleIndex = length / 2;
      const secondHalf = fruits.slice(middleIndex);
      return secondHalf;
    } 
    else {
      return [];
    }
  }
  
  // Testing
  const fruits1 = ["apple", "orange", "banana", "kiwi"];
  const result1 = secondHalfOfArrayIfItIsEven(fruits1);
  console.log(result1);
  
  const fruits2 = ["apple", "orange", "banana", "kiwi", "blueberry"];
  const result2 = secondHalfOfArrayIfItIsEven(fruits2);
  console.log(result2);
    
    /**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
    function youGottaCalmDown(shout) {
    // Your code here
    const firstExclamationIndex = shout.indexOf('!');

    if (firstExclamationIndex !== -1) {
      shout = shout.slice(0, firstExclamationIndex + 1);
    }
  
    return shout;
  }
  
  // Testing
  console.log(youGottaCalmDown("HI!!!!!!!!!!"));
  console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
  console.log(youGottaCalmDown("Hellooooo"));