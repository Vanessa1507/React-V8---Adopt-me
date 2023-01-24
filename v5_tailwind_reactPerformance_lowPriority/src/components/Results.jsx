import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
