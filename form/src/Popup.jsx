import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup">
      <h2 className="data">Your data:</h2>
      <label>
        {" "}
        First Name:
        <p>{props.firstname}</p>
      </label>
      <label>
        {" "}
        Last Name:
        <p>{props.lastname}</p>
      </label>
      <label>
        {" "}
        Phone Number:
        <p>{props.phonenum}</p>
      </label>
      <label>
        {" "}
        Role:
        <p>{props.role}</p>
      </label>
      <label>
        {" "}
        Message:
        <p>{props.message}</p>
      </label>
      <div className="btns">
        <button onClick={props.handleRefresh}>Submit</button>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
