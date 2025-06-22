import "./AnimalList.css";
import { Link } from "react-router-dom";
const BirdsList = () => {
  return (
    <section className="animal-list">
      {" "}
      <h1>Birds Available for Adoption</h1>{" "}
      <div className="animal-cards">
        {" "}
        <div className="animal-card">
          {" "}
          <img
            src="https://preview.redd.it/a-recent-picture-of-my-4-year-old-superb-parrot-kiwi-v0-xwbi9kzvncbe1.jpeg?width=1080&crop=smart&auto=webp&s=22b653cc2053002a9250c87b5fd9f8fe87a887f9"
            alt="Parrot"
          />{" "}
          <h3>Kiwi</h3>{" "}
          <p>
            <strong>Breed:</strong> Parrot
          </p>{" "}
          <p>
            <strong>Age:</strong> 1 year
          </p>{" "}
          <p>
            <strong>Location:</strong> Jaipur, Rajasthan
          </p>{" "}
          <p className="tagline">
            A lively and colorful bird who loves to chat and sing.
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
            src="https://s3.animalia.bio/animals/photos/full/original/canario-silvestre-serinus-canarius-6795919288jpg.webp"
            alt="Canary"
          />{" "}
          <h3>Sunny</h3>{" "}
          <p>
            <strong>Breed:</strong> Canary
          </p>{" "}
          <p>
            <strong>Age:</strong> 2 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Kolkata, West Bengal
          </p>{" "}
          <p className="tagline">
            A cheerful bird who brightens up your day with melodious songs.
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
            src="https://s3.animalia.bio/animals/photos/full/1.25x1/shutterstock-2193036313jpg.webp?id=01d5af71ecdc90a6c1b0ece7b77ed64e"
            alt="Lovebird"
          />{" "}
          <h3>Peach</h3>{" "}
          <p>
            <strong>Breed:</strong> Lovebird
          </p>{" "}
          <p>
            <strong>Age:</strong> 1.5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Hyderabad, Telangana
          </p>{" "}
          <p className="tagline">
            A vibrant and affectionate bird who loves chirping melodies.
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_QbcsnpSbsf-i5dsxQUooJgTrw8-PFTLEHA1TcaOvJ-bAu144gPBVm872pqFR-ddWIQ&usqp=CAU"
            alt="Macaw"
          />{" "}
          <h3>Sky</h3>{" "}
          <p>
            <strong>Breed:</strong> Macaw
          </p>{" "}
          <p>
            <strong>Age:</strong> 5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Pune, Maharashtra
          </p>{" "}
          <p className="tagline">
            An outgoing bird with vibrant colors and an excellent talker.
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
            src="https://cdn.dotpe.in/longtail/store-items/7562157/HE7PUDze.jpeg"
            alt="Cockatiel"
          />{" "}
          <h3>Pip</h3>{" "}
          <p>
            <strong>Breed:</strong> Cockatiel
          </p>{" "}
          <p>
            <strong>Age:</strong> 3 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Kochi, Kerala
          </p>{" "}
          <p className="tagline">
            A lively and affectionate bird, perfect for small spaces.
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
            src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/african-grey-parrot-square-1-scaled.jpg.optimal.jpg"
            alt="African Grey Parrot"
          />{" "}
          <h3>Zazu</h3>{" "}
          <p>
            <strong>Breed:</strong> African Grey Parrot
          </p>{" "}
          <p>
            <strong>Age:</strong> 7 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Jaipur, Rajasthan
          </p>{" "}
          <p className="tagline">
            Intelligent and social, loves interacting with people.
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
            src="https://cdn.download.ams.birds.cornell.edu/api/v2/asset/251883251/900"
            alt="Lovebird"
          />{" "}
          <h3>Oliver</h3>{" "}
          <p>
            <strong>Breed:</strong> Lovebird
          </p>{" "}
          <p>
            <strong>Age:</strong> 2 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Chennai, Tamil Nadu
          </p>{" "}
          <p className="tagline">
            A small, affectionate bird with a bright personality.
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
            src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/414423331/1200"
            alt="Budgerigar"
          />{" "}
          <h3>Buddy</h3>{" "}
          <p>
            <strong>Breed:</strong> Budgerigar
          </p>{" "}
          <p>
            <strong>Age:</strong> 1.5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Delhi
          </p>{" "}
          <p className="tagline">
            Cheerful and playful, loves company and chatter.
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
            src="https://media.istockphoto.com/id/1200509115/photo/earth-canary.jpg?s=612x612&w=0&k=20&c=kJb5EeGMEg15FFQQmjwFC4iC4R95Ta-DZiP5Ea1JZOs="
            alt="Canary"
          />{" "}
          <h3>Lulu</h3>{" "}
          <p>
            <strong>Breed:</strong> Canary
          </p>{" "}
          <p>
            <strong>Age:</strong> 2.5 years
          </p>{" "}
          <p>
            <strong>Location:</strong> Hyderabad, Telangana
          </p>{" "}
          <p className="tagline">A joyful bird with an enchanting song.</p>{" "}
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
export default BirdsList;
