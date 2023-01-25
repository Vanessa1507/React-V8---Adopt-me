import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
//Hooks
import useBreedList from "../hooks/useBreedList";
//Functions
import fetchSearch from "../functions/fetchSearch";
//Context
import AdoptedPetContext from "../context/AdoptedPetContext";
//Components
import Results from "./Results";

//Data
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [requestParams, setRequestParams] = useState({
    animal: "",
    breed: "",
    location: "",
  });

  //Global state
  const [adoptedPet] = useContext(AdoptedPetContext);

  //Custom hooks
  const [breedList] = useBreedList({ animal });

  //ReactQuery
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };

          setRequestParams(obj);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        )}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
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
          <select disabled={breedList.length === 0} id="breed" name="breed">
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
