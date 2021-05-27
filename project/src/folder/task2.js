import React from "react";
class Task2 extends React.Component {
  render() {
    console.log('QUESTION 2 ANSWER FIND THE CONSECUTIVE NUMBER OF 1s IN AN ARRAY')
    const arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
    const findMaxConsecutiveOnes = (arr = []) => {
      let left = 0;
      let right = 0;
      let max = 0;
      while (right < arr.length) {
        if (arr[right] === 0) {
          if (right - left > max) {
            max = right - left;
          }
          right++;
          left = right;
        } else {
          right++;
        }
      }
      return right - left > max ? right - left : max;
    };
    //find the conssecutive number of 1s in an array
    console.log(findMaxConsecutiveOnes(arr));
    return <div>
      
    </div>;
  }
}
export default Task2;
