import React from "react";
import { i18 } from "../constant/i18";
import Regex from "../utilities/Regex";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",

      invalidName: "",
      invalidAddress: "",
      invalidPhone: "",
      invalidEmail: "",
      invalidPassword: "",
      invalidConfirmPassword: ""
    };
  }

  handleSubmit = event => {
   
    // Do not refresh the page
    event.preventDefault();
    const {
      name,
      phone,
      email,
      password,
      confirmPassword
    } = event.target;

    if (name.value.trim().length === 0) {
      this.setState({ invalidName: i18.error.nameEmpty });
    } else if (!Regex.validateString(name.value.trim())) {
      this.setState({ invalidName: i18.error.nameInvalid });


    } else if (phone.value.trim().length === 0) {
      this.setState({ invalidPhone: i18.error.phoneEmpty });
    } else if (!Regex.validateMobile(phone.value.trim())) {
      this.setState({ invalidPhone: i18.error.phoneInvalid });
    } else if (email.value.trim().length === 0) {
      this.setState({ invalidEmail: i18.error.emailEmpty });
    } else if (!Regex.validateEmail(email.value.trim())) {
      this.setState({ invalidEmail: i18.error.emailInvalid });
    } else if (password.value.trim().length === 0) {
      this.setState({ invalidPassword: i18.error.passwordEmpty });
    } else if (!Regex.validatePassword(password.value.trim())) {
      this.setState({ invalidPassword: i18.error.passwordInvalid });
    } else if (confirmPassword.value.trim().length === 0) {
      this.setState({ invalidConfirmPassword: i18.error.confirmPasswordEmpty });
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
      this.setState({
        invalidConfirmPassword: i18.error.confirmPasswordInvalid
      });
    }
    else{
      this.setState({
        name: name.value,
        phone:phone.value,
        email: email.value,
        password: password.value,
        confirmPassword :confirmPassword.value
      })
    
      alert(`Form is submitted:  \n
      name: ${name.value} \n
      phone: ${phone.value} \n
      email: ${email.value}
      password: ${password.value} \n
      ConfirmPassword: ${confirmPassword.value} \n `);
  }
  

 
  };

  render() {
    return (
      <div className="container">
        <h1 className="App">Form</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group ">
            <label>Name:</label>
            <input
              type="text"
              className="form-control "
              id="name"
              placeholder="Enter Name"
              name="name"
              onChange={() => this.setState({ invalidName: "" })}
            />
            <span className="error-divs">{this.state.invalidName}</span>
          </div>

          <div className="form-group ">
            <label>Phone:</label>
            <input
              type="number"
              className="form-control "
              id="phone"
              placeholder="Enter Phone"
              name="phone"
              onChange={() => this.setState({ invalidPhone: "" })}
            />
            <span className="error-divs">{this.state.invalidPhone}</span>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={() => this.setState({ invalidEmail: "" })}
            />
            <span className="error-divs">{this.state.invalidEmail}</span>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              onChange={() => this.setState({ invalidPassword: "" })}
            />
            <span className="error-divs">{this.state.invalidPassword}</span>
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter password"
              name="confirmPassword"
              onChange={() => this.setState({ invalidConfirmPassword: "" })}
            />
            <span className="error-divs">
              {this.state.invalidConfirmPassword}
            </span>
          </div>

       
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
