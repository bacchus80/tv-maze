import { UseFetchError } from "react-fetch-hook";
import { ReactElement } from "react";
import { StyledDiv } from "./NetworkError.styles";

export interface NetworkErrorProps {
   error: UseFetchError | undefined;
}

/** Function for displaying network error */
export function NetworkError({ error }: NetworkErrorProps): ReactElement {
   if (error !== undefined && error?.name !== "SyntaxError") {
      return (
         <StyledDiv>
            <h3>Network error</h3>
            <div>There seems to be a network error</div>
         </StyledDiv>
      );
   }
   return <></>;
}

export function isNetworkErrorAttemptingToFetchResource(
   error: UseFetchError | undefined
): boolean {
   const isError =
      error &&
      error?.message === "NetworkError when attempting to fetch resource."
         ? true
         : false;
   return isError;
}
