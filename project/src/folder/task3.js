import React from 'react';
class Task3 extends React.Component{
    render(){
        console.log('QUESTION 3 ANSWER FIND THE DUPLICAATE NUMBER IN AAN ARRAAY.')
        function find_duplicate_in_array(arra1) {
            var object = {};
            var result = [];
    
            arra1.forEach(function (item) {
              if(!object[item])
                  object[item] = 0;
                object[item] += 1;
            })
    
            for (var prop in object) {
               if(object[prop] >= 2) {
                   result.push(prop);
               }
            }
    
            return result;
    
        }
    // find duplicate item  in an array. question 3
        console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
        return(
            <div>
                
            </div>
        )
    }
}
export default Task3;