import "./PetSc.css";
import { Link } from "react-router-dom";
function PetSc() {
  return (
    <div>
      {" "}
      <section className="pet-section">
        {" "}
        <h1>Meet Our Pets</h1>{" "}
        <div className="pet-category">
          {" "}
          <h2>Dogs</h2>{" "}
          <div className="pet-cards">
            {" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="view-more">
            {" "}
            <Link to="/pets/dogs" className="btn view-more-btn">
              View More
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="pet-category">
          {" "}
          <h2>Cats</h2>{" "}
          <div className="pet-cards">
            {" "}
            <div className="pet-card">
              {" "}
              <img
                src="https://www.shutterstock.com/image-photo/classical-persian-cat-cinnamon-ginger-600nw-2368104449.jpg"
                alt="Persian Cat"
              />{" "}
              <h3>Luna</h3>{" "}
              <p>
                <strong>Breed:</strong> Persian Cat
              </p>{" "}
              <p>
                <strong>Age:</strong> 1.5 years
              </p>{" "}
              <p>
                <strong>Location:</strong> Chennai, Tamil Nadu
              </p>{" "}
              <p className="tagline">
                Graceful and sweet, loves curling up in warm spots.
              </p>{" "}
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
              {" "}
              <img
                src="https://www.gvvet.com/files/AdobeStock163530161-original.jpeg"
                alt="Siamese Cat"
              />{" "}
              <h3>Milo</h3>{" "}
              <p>
                <strong>Breed:</strong> Siamese Cat
              </p>{" "}
              <p>
                <strong>Age:</strong> 2 years
              </p>{" "}
              <p>
                <strong>Location:</strong> Delhi
              </p>{" "}
              <p className="tagline">
                Playful and talkative, with a soft and loving nature.
              </p>{" "}
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
              {" "}
              <img
                src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/07-21/ginger+maine+coon+cat+with+a+gold+tag+sitting+in+an+orange+chair-min.jpg"
                alt="Maine Coon"
              />{" "}
              <h3>Misty</h3>{" "}
              <p>
                <strong>Breed:</strong> Maine Coon
              </p>{" "}
              <p>
                <strong>Age:</strong> 2 years
              </p>{" "}
              <p>
                <strong>Location:</strong> Jaipur, Rajasthan
              </p>{" "}
              <p className="tagline">
                A gentle giant with a fluffy coat and a heart full of love.
              </p>{" "}
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="view-more">
            {" "}
            <Link to="/pets/cats" className="btn view-more-btn">
              View More
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="pet-category">
          {" "}
          <h2>Birds</h2>{" "}
          <div className="pet-cards">
            {" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="pet-card">
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
              <div className="card-buttons">
                {" "}
                <Link to="/adoption-form" className="btn adopt-btn">
                  Adopt Now
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="view-more">
            {" "}
            <Link to="/pets/birds" className="btn view-more-btn">
              View More
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default PetSc;
