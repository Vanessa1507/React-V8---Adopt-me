import { createContext } from "react";
import { IPet } from "../types/APIResponsesTypes";

const AdoptedPetContext = createContext<
  [IPet | null, (adoptedPet: IPet) => void]
>([
  {
    id: 124,
    animal: "dog",
    breed: "Mixed",
    city: "Seatle",
    description: "The best dog",
    images: [],
    name: "Mateo",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
