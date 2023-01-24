export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface IPet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}

export interface IPetAPIResponse {
  endIndex: number;
  hasNext: boolean;
  numberOfResults: number;
  pets: IPet[];
  startIndex: number;
}