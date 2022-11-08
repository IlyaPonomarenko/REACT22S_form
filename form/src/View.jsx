import "./View.css";

const View = (props) => {
    return <div className="container">
        <div className="middle">
        <label> First Name:
            <p>{props.firstname}</p>
        </label>
        <label> Last Name:
            <p>{props.lastname}</p>
        </label>
        <label> Phone Number:
            <p>{props.phonenum}</p>
        </label>
        <label> Role:
            <p>{props.role}</p>
        </label>
        <label> Message
            <p>{props.message}</p>
        </label>
        </div>
    </div>
}
export default View;