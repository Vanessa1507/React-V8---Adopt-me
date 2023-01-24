import { QueryFunction } from "@tanstack/react-query";
// Types
import { Animal, IBreedListAPIResponse } from "../types/APIResponsesTypes";

const fetchBreeds: QueryFunction<
  IBreedListAPIResponse,
  ["breeds", Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`/breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreeds;
