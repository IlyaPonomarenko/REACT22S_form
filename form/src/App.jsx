import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    phonenum: "",
    role: "student",
    message: "",
  });
  const [showPopup, setPopup] = useState(false);
  const changeHandler = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(true);
  };
  const sendData = () => {
    axios
      .post("http://localhost:3001/notes", {
        firstname: state.firstname,
        lastname: state.lastname,
        phonenum: state.phonenum,
        role: state.role,
        message: state.message,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div>
        <h2>Fill in the form:</h2>
        <Form changehandler={changeHandler} handleSubmit={handleSubmit} />
      </div>

      <div>
        <h2>This is your input:</h2>
        <View
          firstname={state.firstname}
          lastname={state.lastname}
          phonenum={state.phonenum}
          role={state.role}
          message={state.message}
        />
        <div>
          <Notes></Notes>
        </div>
      </div>
      {showPopup && (
        <Popup
          firstname={state.firstname}
          lastname={state.lastname}
          phonenum={state.phonenum}
          role={state.role}
          message={state.message}
          handleClose={handleClose}
          sendData={sendData}
        />
      )}
    </div>
  );
};

export default App;
