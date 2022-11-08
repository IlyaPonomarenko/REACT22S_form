import "./Form.css";

const Form = (props) => {
  return (
    <div className="container">
      <form action="submit">
        <label>
          {"First Name "}
          <input type="text" name="firstname" onChange={props.changehandler} />
        </label>
        <label>
          {"Last Name "}
          <input type="text" name="lastname" onChange={props.changehandler} />
        </label>

        <label>
          {"Phone number "}
          <input type="number" name="phonenum" onChange={props.changehandler} />
        </label>
        <label>
          {"Role"}
          <select name="role" onChange={props.changehandler}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="staff">Staff</option>
          </select>
        </label>
        <label>
          {"Your message"}
          <textarea
            name="message"
            cols="20"
            rows="2"
            onChange={props.changehandler}
          ></textarea>
        </label>
        <button onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
