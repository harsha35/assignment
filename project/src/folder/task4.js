import React from 'react'
class Task4 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(res =>res.json()).then(json=>{
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }
    //  QUESTION 4 ANSWER FETCH THE API AND DISPLAY THE RESULT
    render(){
        var{items} = this.state;
        return(
            <div>
                <ul>
                    QUESTION 4 ANSWER FETCH THE API AND DISPLAY THE RESULT
                    {items.map(item =>(
                        <div key={item.id}>
                           ID: {item.id},
                           Title: {item.title}
                        </div>
            
                    ))}
                </ul>
            </div>
        )
    }
}
export default Task4;