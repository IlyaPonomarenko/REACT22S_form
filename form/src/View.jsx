import "./View.css";

const View = ({firstname, lastname, phonenum, role, message}) => {
  return (
    <div className="container">
      <div className="middle">
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
          Message
          <p>{message}</p>
        </label>
      </div>
    </div>
  );
};
export default View;
