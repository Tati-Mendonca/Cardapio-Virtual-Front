import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "react-query";
const URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(URL + "/food");
  return response;
};

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["food-data"],
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
