import React from 'react';
import Task2 from './folder/task2'
import Task1 from './folder/task1'
import Task3 from './folder/task3'
import Task4 from './folder/task4'
import Task5 from './folder/task5'
import Task6 from './folder/task6'
    
class App extends React.Component{
    render(){
        return(
            <div>
              <Task1/>
              <Task2/>
              <Task3/>
              <Task4/>
              <Task5/>
              <Task6/>
            </div>
        )
    }
}
export default App;