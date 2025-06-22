import { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("Both fields are required.");
      return;
    }
    if (
      formData.email === "user@example.com" &&
      formData.password === "password123"
    ) {
      setMessage("Login successfully");
    } else {
      setMessage("Invalid email or password.");
    }
  };
  return (
    <div className="login-container">
      {" "}
      {message && <div className="message">{message}</div>}{" "}
      <form className="login-form" onSubmit={handleSubmit}>
        {" "}
        <h2>Login</h2>{" "}
        <label htmlFor="email">
          {" "}
          <span className="required"></span> Email{" "}
        </label>{" "}
        <input
          type="email"
          className="inputs"
          id="email"
          name="email"
          placeholder="Type your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />{" "}
        <label htmlFor="password">
          {" "}
          <span className="required"></span> Password{" "}
        </label>{" "}
        <input
          type="password"
          className="inputs"
          id="password"
          name="password"
          placeholder="Type your password"
          value={formData.password}
          onChange={handleChange}
          required
        />{" "}
        <div className="forgot-password">
          {" "}
          <a href="#">Forgot Password?</a>{" "}
        </div>{" "}
        <button type="submit">Login</button>{" "}
        <p className="signup-text">
          {" "}
          <span>Don’t have an account?</span>{" "}
          <Link to="/signupform">Sign up</Link>{" "}
        </p>{" "}
        <p className="terms-text">
          {" "}
          By signing in, you agree to our{" "}
          <Link to="/terms-and-conditions">Terms and Conditions</Link>,{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};
export default LoginForm;
