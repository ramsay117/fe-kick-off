import { Component } from "react";
import Pet from "./Pet";

class Animals extends Component {
  constructor(props) {
    super();
    this.state = {
      animal: "",
    };
    this.animals = ["dog", "cat", "rabbit", "bird", "reptile"];
  }
  selectHandler = (e) => {
    const { value } = e.target;
    this.setState({ animal: value });
  };
  render() {
    return (
      <div>
        <select onChange={(e) => this.selectHandler(e)} name="" id="">
          <option value="">None</option>
          {this.animals.map((each) => (
            <option value={each} key={each}>
              {each}
            </option>
          ))}
        </select>
        <Pet animal={this.state.animal} />
      </div>
    );
  }
}

export default Animals;
