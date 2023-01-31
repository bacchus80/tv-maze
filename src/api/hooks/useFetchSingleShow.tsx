/** Hook for fetching a TV show with external id */

import useFetch, { HookOptions } from "react-fetch-hook";
import { apiRoutes } from "../apiRoutes";

export interface useFetchSingleShowProps {
   /** External TV show ID */
   id: number;
}

/** Return a planet object */
export function useFetchSingleShow<TData>({ id }: useFetchSingleShowProps) {
   const options: HookOptions = {
      mode: "cors",
      cache: "force-cache",
   };
   const {
      isLoading,
      error: isError,
      data: show,
   } = useFetch<TData>(apiRoutes.singleTvShow + id, options);
   return { show, isError, isLoading };
}
