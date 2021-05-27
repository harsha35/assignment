import React from "react";
class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  add = () => {
        return this.setState({
          tasks: this.state.tasks.concat({
            name: this.state.value,
          }),
        });
      }
     render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button onClick={this.add}>Add</button>
        <div>
          {/* {console.log(this.state.tasks[0].name, this.state.tasks)} 
                    {this.state.tasks.name} */}
          {this.state.tasks.map((val) => {
            console.log(val);
            return (
              <div>
                {val.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Task6;
