import { Link } from "react-router-dom";

const Pet = ({ animal, breed, id, images, location, name }) => {
  let hero = "http://pets-images.dev-apis.com/pets.none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link className="relative block" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white pr-2 pt-2 ">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
