import "./AnimalList.css";
import { Link } from "react-router-dom";
const DogsList = () => {
  return (
    <section className="animal-list">
      {" "}
      <h1>Dogs Available for Adoption</h1>{" "}
      <div className="animal-cards">
        {" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_LukTVYQBmhxXr02u71BR60FmFj07wR0GH7ryW5kCHLWef4BznpT7CfjR5Uyukevf30ivmnrohj9tBcjmSZUiqw"
            alt="Golden Retriever"
          />{" "}
          <h3>Buddy</h3>{" "}
          <p>
            <strong>Breed:</strong> Golden Retriever
          </p>{" "}
          <p>
            <strong>Age:</strong> 2 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Bengaluru, Karnataka
          </p>{" "}
          <p className="tagline">
            A loyal and friendly companion who loves outdoor adventures.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://image.petmd.com/files/inline-images/english-bulldog-5.jpg?VersionId=1KyTFgo4HZwpAcjf.WZ8mM_2yt6f9Zc3"
            alt="Bulldog"
          />{" "}
          <h3>Max</h3>{" "}
          <p>
            <strong>Breed:</strong> Bulldog
          </p>{" "}
          <p>
            <strong>Age:</strong> 3 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Mumbai, Maharashtra
          </p>{" "}
          <p className="tagline">
            A calm and affectionate pet with a big heart for cuddles.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-Labrador-3.max-400x400.format-jpeg.jpg"
            alt="Labrador Retriever"
          />{" "}
          <h3>Rocky</h3>{" "}
          <p>
            <strong>Breed:</strong> Labrador Retriever
          </p>{" "}
          <p>
            <strong>Age:</strong> 3 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Pune, Maharashtra
          </p>{" "}
          <p className="tagline">
            A playful and energetic buddy who loves fetch and long walks.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://i.ytimg.com/vi/GI6_djJkN-4/maxresdefault.jpg"
            alt="Beagle"
          />{" "}
          <h3>Charlie</h3>{" "}
          <p>
            <strong>Breed:</strong> Beagle
          </p>{" "}
          <p>
            <strong>Age:</strong> 4 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Ahmedabad, Gujarat
          </p>{" "}
          <p className="tagline">
            A curious explorer with a love for sniffing adventures.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://preview.redd.it/82ssjykzjw071.jpg?width=1080&crop=smart&auto=webp&s=ef134801a0827101543e554918d103fac19280c1"
            alt="German Shepherd"
          />{" "}
          <h3>Max</h3>{" "}
          <p>
            <strong>Breed:</strong> German Shepherd
          </p>{" "}
          <p>
            <strong>Age:</strong> 5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Lucknow, Uttar Pradesh
          </p>{" "}
          <p className="tagline">
            Loyal and protective, the perfect family guardian.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://www.dogster.com/wp-content/uploads/2019/11/Dalmatian-Sitting-Outdoors-in-the-Woods-Kerrie-T-Shutterstock.jpg"
            alt="Dalmatian"
          />{" "}
          <h3>Spot</h3>{" "}
          <p>
            <strong>Breed:</strong> Dalmatian
          </p>{" "}
          <p>
            <strong>Age:</strong> 3 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Chandigarh
          </p>{" "}
          <p className="tagline">
            Full of energy and always ready for a game of fetch.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://preview.redd.it/spaying-an-old-7-pomeranian-v0-g917slwsn63d1.jpeg?width=1080&crop=smart&auto=webp&s=221419be8a45c2ec484034fc4ce4f53079fb2173"
            alt="Pomeranian"
          />{" "}
          <h3>Coco</h3>{" "}
          <p>
            <strong>Breed:</strong> Pomeranian
          </p>{" "}
          <p>
            <strong>Age:</strong> 2 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Jaipur, Rajasthan
          </p>{" "}
          <p className="tagline">
            Small in size, big in personality, and loves attention.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://www.pdsa.org.uk/media/10361/shih-tzu-gallery-2.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132475737660000000"
            alt="Shih Tzu"
          />{" "}
          <h3>Lily</h3>{" "}
          <p>
            <strong>Breed:</strong> Shih Tzu
          </p>{" "}
          <p>
            <strong>Age:</strong> 1.5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Surat, Gujarat
          </p>{" "}
          <p className="tagline">
            A cuddly companion with a charming personality.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://media.istockphoto.com/id/1490406896/photo/portrait-dog-olde-english-bulldogge.jpg?s=612x612&w=0&k=20&c=rzzoSHHU27B45nm-wk3TqR4L4kh94MZIUvXJ2GX7g-k="
            alt="Bulldog"
          />{" "}
          <h3>Bruno</h3>{" "}
          <p>
            <strong>Breed:</strong> Bulldog
          </p>{" "}
          <p>
            <strong>Age:</strong> 4 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Kolkata, West Bengal
          </p>{" "}
          <p className="tagline">
            A calm and affectionate friend who loves to relax.
          </p>{" "}
          <div className="animal-card-buttons">
            {" "}
            <Link to="/adoption-form" className="btn adopt-btn">
              Adopt Now
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default DogsList;
