//Types
import { IPet } from "../types/APIResponsesTypes";
//Components
import Pet from "./Pet";


const Results = ({ pets }: { pets: IPet[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            images={pet.images}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
            name={pet.name}
          />
        ))
      )}
    </div>
  );
};

export default Results;
