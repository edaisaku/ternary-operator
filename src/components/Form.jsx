import React from "react";

function Form(props) {
  return (
    <div> 
    <h1> Hello </h1>
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistred  ? (<input type="password" placeholder="Confirm Password" />) : null}
      <button type="submit">
      {props.isRegistred === true ? "Login" : "Register"}
      </button>
    </form>
    </div>
  );
}

export default Form;
