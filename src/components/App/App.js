import React, { Component } from "react";
//import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./App.css";
import logo from "../../netflix_logo.png";

//src/actions/index.js
///Users/yujin/Desktop/YuJinProject/netflix/src/actions/index.js

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
    console.log("recommendations: " + this.props.recommendations);
  }
  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleAdd = id => {
    this.props.addItem(id);
  };
  render() {
    const { list, recommendations } = this.props;

    return (
      <div className="App">
        {/* Netflix */}
        <img className="logo" src={logo} alt="netflixlogo" />

        <h2>My List</h2>
        <div className="list">
          {list.map((ele, index) => {
            //console.log(ele);
            return (
              <div className="movie">
                <h3>{ele.title}</h3>
                <div className="postShow">
                  <img src={ele.img} alt={ele.id} />
                  <div className="overlay" />
                  <button onClick={() => this.handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Recommendations</h2>
        <div className="recommendations">
          {recommendations.map((ele, index) => {
            return (
              <div className="movie">
                <h3>{ele.title}</h3>
                <div className="postShow">
                  <img src={ele.img} alt={ele.id} />
                  <div className="overlay" />
                  <div>
                    <button onClick={() => this.handleAdd(index)}>Add</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(actions.getData());
    },
    addItem: id => {
      dispatch(actions.addItemToList(id));
    },
    removeItem: id => {
      dispatch(actions.removeItemFromList(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
