import React from 'react'
class Task5 extends React.Component{
    render(){
        console.log(' QUESTION 5 ANSWER CODE TO SORT THE OBJECT BY ID')
        var obj  = [
            {
               id : 4,
               name:"abc"
            },
        
            {
                 id : 10,
               name:"ab2"
            },
        
            {
                 id : 5,
               name:"abc3"
            },
            
            {
            
                 id : 6,
               name:"abc5"
            }
        ];
        obj.sort((a, b) => {
            return a.id - b.id;
        });
        obj.forEach((e) => {
            console.log(`id:${e.id} name:${e.name}`);
        });
        
        return(
            <div>
                 <ul>
                     QUESTION 5 ANSWER CODE TO SORT THE OBJECT BY ID
                    {obj.map(item =>(
                        <div key={item.id}>
                           ID: {item.id},
                           Title: {item.name}
                        </div>
            
                    ))}
                </ul>
            </div>
        )
    }
}
export default Task5;