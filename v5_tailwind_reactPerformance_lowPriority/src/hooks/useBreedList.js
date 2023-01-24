import { useQuery } from '@tanstack/react-query';
//Functions
import fetchBreeds from '../functions/fetchBreeds';


const useBreedList = ({ animal }) => {
  const response = useQuery(['breeds', animal], fetchBreeds);


  return { breedList: response?.data?.breeds ?? [], status: response.status };
};
export default useBreedList;
