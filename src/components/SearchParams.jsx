import { useEffect, useState } from "react";
//Components
import Pet from "./Pet";
import useBreedList from "../hooks/useBreedList";
//Data
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const { breedList } = useBreedList({ animal });

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const request = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await request.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            value={location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            value={animal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={breedList.length === 0}
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          >
            <option />
            {breedList.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          name={pet.name}
        />
      ))}
    </div>
  );
};

export default SearchParams;
