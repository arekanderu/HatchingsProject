import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import Details from "./Details";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      nameInput: "",
      tagInput: "",
      value: ""
    };
    this.setTags = this.setTags.bind(this);
  }

  async componentDidMount() {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: JSON.parse(JSON.stringify(data.students)) });
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  setTags = (tags = [], id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((element) =>
        element.id === id ? Object.assign(element, { tags: tags }) : element
      )
    }));
  };

  filteredArray = () => {
    const { data, nameInput, tagInput } = this.state;
    let filteredNames = data.filter(
      (item) =>
        item.firstName.toLowerCase().includes(nameInput) ||
        item.lastName.toLowerCase().includes(nameInput)
    );

    let filteredTags = data.filter(
      (item) =>
        (item.tags &&
          [item.tags.toString().toLowerCase()].includes(tagInput) &&
          item.firstName.includes(nameInput)) ||
        (item.tags &&
          [item.tags.toString().toLowerCase()].includes(tagInput) &&
          item.lastName.toLowerCase().includes(nameInput))
    );

    return filteredTags.length === 0 ? filteredNames : filteredTags;
  };

  render() {
    return (
      <div>
        <SearchBar
          name="nameInput"
          id="name-input"
          placeHolder="Search by name"
          onChange={this.handleOnChange.bind(this)}
        />

        <SearchBar
          name="tagInput"
          id="tag-input"
          placeHolder="Search by tags"
          onChange={this.handleOnChange.bind(this)}
        />

        <Details array={this.filteredArray()} action={this.setTags} />
      </div>
    );
  }
}

export default App;
