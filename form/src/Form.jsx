import "./Form.css";

const Form = (props) =>{
    return <div>
        <form action="submit">
        <label> First Name
        <input type="text" />
       </label>

       <label> Last Name
        <input type="text" />
       </label>

       <label> Phone number
        <input type="number" />
       </label>
       <label> Role
        <select name="roles">
            <option value="student">Student</option>
            <option value="student">Teacher</option>
            <option value="student">Staff</option>
        </select>
       </label>
        <label> Your message
            <textarea name="message" cols="10" rows="10"></textarea>
        </label>
        </form>
       
    </div>
}


export default Form;