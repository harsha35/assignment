/* eslint-disable no-undef */
import React from "react";
class Task1 extends React.Component {
  render() {
    console.log('QUESTION 1 ANSWER FIND EVEN NUMER IN AN ARRAY')
    var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
    var evens = [];
    
    var evenNumbers = function(nums) {
        for (var i = 0; i < nums.length; i++) {
    
            if ((nums[i] % 2) !== 1) {
                evens.push(nums[i]);
                    console.log(evens);
            }
        }
    
    };
    //find the even number in an array
    
    evenNumbers(nums);

    return <div>
  
    </div>;
  }
}
export default Task1;
