import { ReactElement } from "react";
import { FaStar as StarIcon } from "react-icons/fa";

export interface StarRatingProps {
   rating: number | undefined;
}
export function StarRating({ rating }: StarRatingProps): ReactElement {
   if (typeof rating === "number") {
      return (
         <div>
            <StarIcon color="orange" />
            {rating}/10
         </div>
      );
   }
   return <div></div>;
}
