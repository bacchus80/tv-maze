/** Hook for fetching a TV show with external id */

import useFetch, { HookOptions } from "react-fetch-hook";
import { createUrl } from "../../utils";
import { apiRoutes } from "../apiRoutes";

export interface useFindCoverShowProps {
   /** Search query */
   page: number;
   enableQuery?: boolean;
}

/** Return a planet object */
export function useFindCoverShow<TData>({
   page,
   enableQuery = true,
}: useFindCoverShowProps) {
   const options: HookOptions = {
      mode: "cors",
      cache: "force-cache",
   };

   const {
      isLoading,
      error: isError,
      data: shows,
   } = useFetch<TData[]>(
      enableQuery ? createUrl(apiRoutes.allShows, page) : "",
      options
   );
   return { shows, isError, isLoading };
}
