import './Footer.css'; // Import CSS for styling
const Footer = () => {
  return (
    <div className="footer-bottom">
      {' '}
      <p>&copy; {new Date().getFullYear()} PetAdopt. All rights reserved.</p>{' '}
    </div>
  );
};
export default Footer;
