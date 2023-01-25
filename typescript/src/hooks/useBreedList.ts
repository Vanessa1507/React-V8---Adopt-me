import { QueryStatus, useQuery } from "@tanstack/react-query";
//Functions
import fetchBreeds from "../functions/fetchBreeds";
//Types
import { Animal } from "../types/APIResponsesTypes";

const useBreedList = ({ animal }: { animal: Animal }) => {
  const response = useQuery(["breeds", animal], fetchBreeds);

  return [response?.data?.breeds ?? [], response.status] as [
    string[],
    QueryStatus
  ];
  // return { breedList: response?.data?.breeds ?? [], status: response.status };
};
export default useBreedList;
