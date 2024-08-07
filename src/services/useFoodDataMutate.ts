import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "react-query";

const URL = "http://localhost:8080";

const postData = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.post(URL + "/food", data);
  return response;
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate
}
