import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(true);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Perform email validation logic (e.g., basic format check)
    // Return true if email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleEmailChange = (e) => {
    setIsEmailValid(true);
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Perform email validation (e.g., basic format check)
  };
  const handlePasswordChange = (e) => {
    setIsPasswordValid(true);
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    // Perform password validation (e.g., length, uppercase, lowercase, special character check)
  };
  const handleSubmit = async (e) => {
    // Perform final validation and submit the form if everything is valid
    e.preventDefault();
    setIsLoading(true);

    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(!!password);
    if (isEmailValid && isPasswordValid) {
      // Perform signup logic
      console.log("Lets  go");

      const response = await axios.post(
        "http://localhost:2000/api/users/login",
        { email, password }
      );

      if (response.status === 200) {
        // navigate("/Home");
      } else {
        setIsLoginValid(false);
      }
    } else {
      // Display an error message or prevent form submission
    }
    setIsLoading(false);
  };
  const checkApi=async()=>{
    console.log('Insiede')
    let response
    try{
    response = await axios.post(
        "http://localhost:2000/api/qna/check", { withCredentials: true },
        
      )}catch(e){
        console.log(e,'ERR')
      }
      console.log(response,'RES')
  }
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'url("your-background-image.jpg") center/cover',
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust opacity here
      }}
    >
      <div className="card p-4" style={{ width: "24rem" }}>
        <h1 className="card-title text-center mb-4">Login</h1>
        <button type="button" class="btn" onClick={()=>checkApi()}>Base class</button>
        {!isLoginValid && (
          <h4 className=" text-center m2-4 text-danger">Invalid Credentials!</h4>
        )}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            {!isEmailValid && (
              <p style={{ color: "red" }}>Invalid email format</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isPasswordValid && (
              <p style={{ color: "red" }}>Password field is mandatory!</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={(e) => handleSubmit(e)}
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-center mt-3">
            Not a member? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
