import { useState } from "react";
import styles from "./AdoptionForm.module.css";
const PetAdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    petType: "",
    petName: "",
    adoptionReason: "",
    experience: false,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.petType)
      formErrors.petType = "Preferred pet type is required";
    if (!formData.adoptionReason)
      formErrors.adoptionReason = "Reason for adoption is required";
    if (!formData.termsAccepted)
      formErrors.termsAccepted = "You must accept the terms and conditions";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          petType: "",
          petName: "",
          adoptionReason: "",
          experience: false,
          termsAccepted: false,
        });
      }, 3000);
    }
  };
  return (
    <div className={styles.formContainer}>
      {" "}
      {isSubmitted && (
        <div className={styles.successMessage}>Submit Successfully!</div>
      )}{" "}
      <h1>Pet Adoption Form</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <div>
          {" "}
          <label htmlFor="name">Full Name:</label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />{" "}
          {errors.name && <p className={styles.error}>{errors.name}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="email">Email Address:</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />{" "}
          {errors.email && <p className={styles.error}>{errors.email}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="phone">Phone Number:</label>{" "}
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />{" "}
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="address">Address:</label>{" "}
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />{" "}
          {errors.address && (
            <p className={styles.error}>{errors.address}</p>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="petType">Preferred Pet Type:</label>{" "}
          <select
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
          >
            {" "}
            <option value="">Select a pet type</option>{" "}
            <option value="dog">Dog</option> <option value="cat">Cat</option>{" "}
            <option value="bird">Bird</option>{" "}
            <option value="other">Other</option>{" "}
          </select>{" "}
          {errors.petType && (
            <p className={styles.error}>{errors.petType}</p>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="petName">Preferred Pet Name (optional):</label>{" "}
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="adoptionReason">Reason for Adoption:</label>{" "}
          <textarea
            id="adoptionReason"
            name="adoptionReason"
            value={formData.adoptionReason}
            onChange={handleChange}
            required
          />{" "}
          {errors.adoptionReason && (
            <p className={styles.error}>{errors.adoptionReason}</p>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="experience">
            {" "}
            Do you have experience with pets?{" "}
          </label>{" "}
          <input
            type="checkbox"
            id="experience"
            name="experience"
            checked={formData.experience}
            onChange={handleChange}
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="termsAccepted">
            {" "}
            I accept the terms and conditions{" "}
          </label>{" "}
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />{" "}
          {errors.termsAccepted && (
            <p className={styles.error}>{errors.termsAccepted}</p>
          )}{" "}
        </div>{" "}
        <button type="submit">Submit</button>{" "}
      </form>{" "}
    </div>
  );
};
export default PetAdoptionForm;
