import React, { Component } from "react";
import { Collapse } from "@material-ui/core";
import Icon from "./Icon";
import Tags from "./Tags";
import SearchBar from "./SearchBar";

class Grades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
      value: "",
      tags: []
    };
  }

  handleOnClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.setState(
        {
          tags: [...this.state.tags, this.state.value],
          value: ""
        },
        () => {
          this.props.action(this.state.tags, this.props.id);
        }
      );
    }
  };

  render() {
    const { isClicked, value } = this.state;
    const { tags } = this.props;
    return (
      <div>
        <Icon action={isClicked} onClick={() => this.handleOnClick()} />

        <Collapse in={!isClicked}>
          {this.props.grades.map((grade, key) => (
            <div className="grades" key={key}>
              <p>
                Test {key + 1}: <span className="grade">{grade}%</span>
              </p>
            </div>
          ))}

          <Tags test={tags} />

          <br />

          <div className="add-tag-input">
            <SearchBar
              name="addTagInput"
              id="add-tag-input"
              placeHolder="Add a tag"
              onChange={this.handleOnChange.bind(this)}
              onKeyDown={this.handleKeyPress}
              value={value}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Grades;
