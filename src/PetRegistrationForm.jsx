import { useState } from "react";
import styles from "./PetRegistrationForm.module.css";
const PetRegistrationForm = () => {
  const [petData, setPetData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    description: "",
    image: null,
    location: "",
    contactNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPetData({ ...petData, [name]: name === "image" ? files[0] : value });
  };
  const validate = () => {
    const newErrors = {};
    if (!petData.name) newErrors.name = "Pet name is required";
    if (!petData.type) newErrors.type = "Pet type is required";
    if (!petData.breed) newErrors.breed = "Pet breed is required";
    if (!petData.age) newErrors.age = "Pet age is required";
    if (!petData.description) newErrors.description = "Description is required";
    if (!petData.location) newErrors.location = "Location is required";
    if (!petData.contactNumber)
      newErrors.contactNumber = "Contact number is required";
    if (petData.contactNumber && !/^\d{10}$/.test(petData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      console.log("Pet Data Submitted:", petData);
      setSuccessMessage("Pet registered successfully!");
      setPetData({
        name: "",
        type: "",
        breed: "",
        age: "",
        description: "",
        image: null,
        location: "",
        contactNumber: "",
      });
      setErrors({});
    }
  };
  const buttonStyle = (bgColor = "#550498", textColor = "white") => ({
    backgroundColor: isHovered ? "green" : bgColor,
    color: textColor,
    border: "none",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 auto",
    display: "flex",
    transition: "background-color 0.1s ease-in-out",
  });
  return (
    <section className={styles.registrationSection}>
      {" "}
      <h1>Pet Registration</h1>{" "}
      <form className={styles.form} onSubmit={handleSubmit}>
        {" "}
        {successMessage && (
          <p style={{ color: "green", textAlign: "center" }}>
            {successMessage}
          </p>
        )}{" "}
        <div>
          {" "}
          <label>
            {" "}
            Pet Name:{" "}
            <input
              type="text"
              name="name"
              value={petData.name}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.name && <p>{errors.name}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Pet Type:{" "}
            <select name="type" value={petData.type} onChange={handleChange}>
              {" "}
              <option value="">Select Type</option>{" "}
              <option value="Dog">Dog</option> <option value="Cat">Cat</option>{" "}
              <option value="Bird">Bird</option>{" "}
            </select>{" "}
          </label>{" "}
          {errors.type && <p>{errors.type}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Breed:{" "}
            <input
              type="text"
              name="breed"
              value={petData.breed}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.breed && <p>{errors.breed}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Age:{" "}
            <input
              type="number"
              name="age"
              value={petData.age}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.age && <p>{errors.age}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Description:{" "}
            <textarea
              name="description"
              value={petData.description}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.description && <p>{errors.description}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Location:{" "}
            <input
              type="text"
              name="location"
              value={petData.location}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.location && <p>{errors.location}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Contact Number:{" "}
            <input
              type="text"
              name="contactNumber"
              value={petData.contactNumber}
              onChange={handleChange}
            />{" "}
          </label>{" "}
          {errors.contactNumber && <p>{errors.contactNumber}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label>
            {" "}
            Upload Image:{" "}
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />{" "}
          </label>{" "}
        </div>{" "}
        <button
          style={buttonStyle()}
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {" "}
          Register Pet{" "}
        </button>{" "}
      </form>{" "}
    </section>
  );
};
export default PetRegistrationForm;
