import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import React, { Component } from "react";
class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenum: "",
    role: "student",
    message: "",
    showPopup: false,
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true,
    });
  };
  handleClose = () => {
    this.setState({
      showPopup: false,
    });
  };
  handleRefresh = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>Fill in the form:</h2>
          <Form
            changehandler={this.changeHandler}
            handleSubmit={this.handleSubmit}
          />
        </div>

        <div>
          <h2>This is your input:</h2>
          <View
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenum={this.state.phonenum}
            role={this.state.role}
            message={this.state.message}
          />
          <div>
            <Notes></Notes>
          </div>
        </div>
        {this.state.showPopup && (
          <Popup
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenum={this.state.phonenum}
            role={this.state.role}
            message={this.state.message}
            handleClose={this.handleClose}
            handleRefresh={this.handleRefresh}
          />
        )}
      </div>
    );
  }
}

export default App;
