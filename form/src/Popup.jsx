import "./Popup.css";

const Popup = ({
  firstname,
  lastname,
  phonenum,
  role,
  message,
  handleClose,
  sendData
}) => {
  return (
    <div className="popup">
      <h2 className="data">Your data:</h2>
      <label>
        {" "}
        First Name:
        <p>{firstname}</p>
      </label>
      <label>
        {" "}
        Last Name:
        <p>{lastname}</p>
      </label>
      <label>
        {" "}
        Phone Number:
        <p>{phonenum}</p>
      </label>
      <label>
        {" "}
        Role:
        <p>{role}</p>
      </label>
      <label>
        {" "}
        Message:
        <p>{message}</p>
      </label>
      <div className="btns">
        <button
          onClick={sendData}
        >
          Submit
        </button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
