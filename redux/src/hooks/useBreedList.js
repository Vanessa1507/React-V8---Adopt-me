//Functions
import { useGetBreedsQuery } from '../functions/petApiService';

const useBreedList = ({ animal }) => {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    //If we don't have this params we'll skip the request
    skip: !animal
  });

  if (!animal) return { breedList: [], status: "loaded" };

  return { breedList: breeds ?? [], status: isLoading ? "loading" : "loaded" };
};
export default useBreedList;
