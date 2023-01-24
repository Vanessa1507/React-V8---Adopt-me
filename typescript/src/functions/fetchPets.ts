//Types that come from Tan Stack Query
import { QueryFunction } from "@tanstack/react-query";
//Types
import { IPetAPIResponse } from "../types/APIResponsesTypes";

//This is a Query function
// const fetchPets: QueryFunction<The shape of the response, the param that we are expecting(details= string)>
const fetchPets: QueryFunction<IPetAPIResponse, ["details", string]> = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${id}`
  );

  if (!apiRes.ok) {
    throw new Error(`/details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPets;