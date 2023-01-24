import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//Functions
import fetchPets from "../functions/fetchPets";
//Context
import AdoptedPetContext from "../context/AdoptedPetContext";
//Components
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  //Global state
  const [_, setAdoptedPet] = useContext(AdoptedPetContext); // eslint-disable-line no-unused-vars

  //Hooks
  const navigate = useNavigate();
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets);

  if (results.isError) {
    return (
      <div className="">
        <h2>Oh no!</h2>
      </div>
    );
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setIsShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {isShowModal && (
          <Modal>
            <div>
              <h1>Would you like to adopt ${pet.name}</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setIsShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

const DetailsErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsErrorBoundary;
