import { ReactElement, useEffect } from "react";
import { useFetchSingleShow } from "../../api/hooks";
import { TVshow } from "../../models";
import { Favorite, NetworkError } from "../../components";
import { useParams } from "react-router-dom";
import { Infobox } from "./Infobox";
import {
   StyledTitleSpan,
   StyledHeaderDiv,
   CardHolder,
   MainCard,
   StyledSection,
   StyledImage,
   StyledSummaryDiv,
} from "./Detail.styles";

export function Detail(): ReactElement {
   const { id } = useParams();
   const showId = parseInt(id || "0", 10);
   const { show, isError, isLoading } = useFetchSingleShow<TVshow>({
      id: showId,
   });

   useEffect(() => {
      if (show) {
         document.title = show.name;
      }
   }, [show]);

   return (
      <CardHolder>
         {isLoading && <div>Loading</div>}
         <NetworkError error={isError} />
         {isError === undefined && !isLoading && show !== undefined && (
            <div>
               <StyledHeaderDiv>
                  <StyledTitleSpan>{show?.name}</StyledTitleSpan>
                  <Favorite
                     id={showId}
                     title={show?.name || ""}
                     imageUrl={show?.image.medium}
                  />
               </StyledHeaderDiv>
               <MainCard>
                  <StyledSection>
                     <StyledImage src={show?.image.medium} title={show?.name} />
                     <StyledSummaryDiv
                        dangerouslySetInnerHTML={{
                           __html: show?.summary as string,
                        }}
                     />
                  </StyledSection>
                  <Infobox show={show} />
               </MainCard>
            </div>
         )}
      </CardHolder>
   );
}
