import { QueryFunction } from "@tanstack/react-query";
//Types
import { Animal, IPetAPIResponse } from "../types/APIResponsesTypes";

const fetchSearch: QueryFunction<
  IPetAPIResponse,
  [
    "search",
    {
      animal: Animal;
      location: string;
      breed: string;
    }
  ]
> = async ({ queryKey }) => {
  const { animal, breed, location } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not okay, ${animal}, ${location}, ${breed}`);
  }

  return res.json();
};

export default fetchSearch;
