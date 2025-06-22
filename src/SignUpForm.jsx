import { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (formData.email === "user@example.com") {
      setMessage("This email is already taken.");
      return;
    }
    setMessage("Signup successful! Welcome to our platform.");
  };
  return (
    <div className="signup-container">
      {" "}
      {message && <div className="message">{message}</div>}{" "}
      <form className="signup-form" onSubmit={handleSubmit}>
        {" "}
        <h2>Signup</h2> <label htmlFor="username"> Username </label>{" "}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />{" "}
        <label htmlFor="email"> Email </label>{" "}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />{" "}
        <label htmlFor="password"> Password </label>{" "}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Create your password"
          value={formData.password}
          onChange={handleChange}
          required
        />{" "}
        <label htmlFor="confirmPassword"> Confirm Password </label>{" "}
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />{" "}
        <button type="submit">Sign Up</button>{" "}
        <p className="login-text">
          {" "}
          <span>Already have an account?</span>{" "}
          <Link to="/loginform">Login</Link>{" "}
        </p>{" "}
        <p className="terms-text">
          {" "}
          By signing up, you agree to our{" "}
          <Link to="/terms-and-conditions">Terms and Conditions</Link>,{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};
export default SignupForm;
