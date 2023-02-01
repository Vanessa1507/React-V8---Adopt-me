import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//Functions
import { useGetPetQuery } from "../functions/petApiService";
//Redux
import { adopt } from "../store/adoptedPetSlice";
//Components
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  //Global state
  const dispatch = useDispatch();

  //Hooks
  const navigate = useNavigate();
  const { id } = useParams();
  // const results = useQuery(["details", id], fetchPets);
  const { isLoading, data: pet } = useGetPetQuery(id);

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

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
                    dispatch(adopt(pet));
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
