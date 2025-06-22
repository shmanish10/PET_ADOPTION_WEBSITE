import "./HeroSc.css";
import AboutSc from "./AboutSc";
import PetSc from "./PetSc";
import PetRegistrationForm from "./PetRegistrationForm";
import ContactSection from "./ContactSc";
import Footer from "./Footer";
function HeroSc() {
  return (
    <div>
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-bg"></div> <h1>Welcome to Pet Adoption</h1>{" "}
        <p>
          Discover the joy of companionship! At Pet Adoption, we connect loving
          families with adorable pets waiting for a forever home. Find your
          furry soulmate today and make a lifelong friend!{" "}
        </p>{" "}
      </section>{" "}
      <AboutSc /> <PetSc /> <PetRegistrationForm /> <ContactSection />{" "}
      <Footer />{" "}
    </div>
  );
}
export default HeroSc;
