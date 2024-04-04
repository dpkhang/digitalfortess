import appConfig from "@/config/env";
import { Project } from "@/types/project";
import { ErrorResponse, FetchOptions, ListOptions, ListResponse } from "@/types/shared";
import useSWR from "swr";

const useProductList = () => {
  return useSWR<
    ListResponse<Project>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >({
    path: "/projects",
  });
};

export default useProductList;
