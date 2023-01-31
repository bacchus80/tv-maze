import { StarRating } from "../../../components";
import { getYearFromDate } from "../../../utils";
import { TVshow } from "../../../models";
import { StyledSection, StyledHeader } from "./Infobox.styles";

export interface InfoboxProps {
   show: TVshow | undefined;
}

/** Component for display general show information  */
export function Infobox({ show }: InfoboxProps) {
   const schedule =
      show &&
      show.schedule.days.join("s, ") +
         "s at " +
         show.schedule.time +
         " (" +
         show.averageRuntime +
         "min)";

   const network =
      show &&
      show?.network?.name +
         " (" +
         getYearFromDate(show?.premiered) +
         " - " +
         getYearFromDate(show?.ended) +
         ")";

   const officialSite = show?.officialSite || show?.network?.officialSite;

   return (
      <StyledSection>
         <StyledHeader>Information</StyledHeader>
         <div>
            <strong>Network:</strong> {network}
         </div>
         <div>
            <strong>Schedule:</strong> {schedule}
         </div>
         <div>
            <strong>Status:</strong> {show?.status}
         </div>
         <div>
            <strong>Language:</strong> {show?.language}
         </div>
         <div>
            <strong>Show Type:</strong> {show?.type}
         </div>
         {show?.genres && show?.genres.length > 0 && (
            <div>
               <strong>Genres:</strong> {show?.genres.join(", ")}
            </div>
         )}
         <div>
            <strong>Official site: </strong>{" "}
            <a href={officialSite}>{officialSite}</a>
         </div>
         <StarRating rating={show?.rating.average} />
      </StyledSection>
   );
}
