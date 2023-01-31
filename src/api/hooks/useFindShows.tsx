/** Hook for fetching a TV show with external id */

import useFetch, { HookOptions } from "react-fetch-hook";
import { createUrl } from "../../utils";
import { apiRoutes } from "../apiRoutes";

export interface useFindShowsProps {
   /** Search query */
   query: string | number;
   enableQuery?: boolean;
}

/** Return a planet object */
export function useFindShows<TData>({
   query,
   enableQuery = true,
}: useFindShowsProps) {
   const options: HookOptions = {
      mode: "cors",
      cache: "force-cache",
   };

   const {
      isLoading,
      error: isError,
      data: shows,
   } = useFetch<TData[]>(
      enableQuery ? createUrl(apiRoutes.shows, query) : "",
      options
   );
   return { shows, isError, isLoading };
}
