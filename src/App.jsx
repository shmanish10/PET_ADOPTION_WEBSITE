import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import HeroSc from "./HeroSc";
import AboutSc from "./AboutSc";
import PetSc from "./PetSc";
import PetRegistrationForm from "./PetRegistrationForm";
import DogsList from "./DogList";
import CatList from "./CatList";
import BirdsList from "./BirdList";
import AdoptionForm from "./AdoptionForm";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ContactSection from "./ContactSc";
function App() {
  return (
    <Router>
      {" "}
      <ScrollToTop /> <Navbar />{" "}
      <Routes>
        {" "}
        <Route path="/" element={<HeroSc />} />{" "}
        <Route path="/about" element={<AboutSc />} />{" "}
        <Route path="/pets" element={<PetSc />} />{" "}
        <Route path="/list-pet" element={<PetRegistrationForm />} />{" "}
        <Route path="/pets/dogs" element={<DogsList />} />{" "}
        <Route path="/pets/cats" element={<CatList />} />{" "}
        <Route path="/pets/birds" element={<BirdsList />} />{" "}
        <Route path="/adoption-form" element={<AdoptionForm />} />{" "}
        <Route path="/contact" element={<ContactSection />} />{" "}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
        <Route path="/terms-and-conditions" element={<TermsConditions />} />{" "}
        <Route path="/loginform" element={<LoginForm />} />{" "}
        <Route path="/signupform" element={<SignUpForm />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
