import { Link } from "react-router-dom";
//Types
import { Animal } from "../types/APIResponsesTypes";

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number
}

const Pet = ({ animal, breed, id, images, location, name }: IProps) => {
  let hero = "http://pets-images.dev-apis.com/pets.none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
