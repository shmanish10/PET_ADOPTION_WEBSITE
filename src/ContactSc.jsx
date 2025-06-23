import './ContactSc.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ContactSection = () => {
  return (
    <div>
      {' '}
      <div className="contact-section">
        {' '}
        <h1>Contact Us</h1>{' '}
        <div className="contact-container">
          {' '}
          {/* Left Section */}{' '}
          <div className="contact-left">
            {' '}
            <h2>Let us stay connected</h2>{' '}
            <p>
              {' '}
              Connect with us for updates on our activities, upcoming events, and pet care
              information.{' '}
            </p>{' '}
            <div className="social-icons">
              {' '}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon facebook"
              >
                {' '}
                <FaFacebookF />{' '}
              </a>{' '}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon instagram"
              >
                {' '}
                <FaInstagram />{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
          {/* Center Section */}{' '}
          <div className="contact-center">
            {' '}
            <h2>Quick Links</h2>{' '}
            <ul>
              {' '}
              <li>
                <Link to="/about">About Us</Link>
              </li>{' '}
              <li>
                <Link to="/list-pet">List Your Pet</Link>
              </li>{' '}
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>{' '}
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          {/* Right Section */}{' '}
          <div className="contact-right">
            {' '}
            <h2>Looking to adopt a pet?</h2> <p>Please get in touch with one of our members:</p>{' '}
            <div className="contact-box">
              {' '}
              <p className="label">Mail us at</p>{' '}
              <a href="mailto:hello@petadoption.in">hello@petadoption.in</a>{' '}
            </div>{' '}
            <div className="contact-box">
              {' '}
              <p className="label">Availability</p> <p>10 AM – 07 PM</p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
export default ContactSection;
