import { URLS, createUrl, randomNumber } from "../../utils";
import { TVshow } from "../../models";
import { isNetworkErrorAttemptingToFetchResource } from "../NetworkError";
import { useFindCoverShow } from "../../api/hooks";
import { useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import {
   StyledImg,
   StyledCoverConatiner,
   StyledCoversContainer,
   StyledSingleCover,
} from "./ShowCovers.styles";

/** Overview data for a TV show */
interface Cover {
   id: number;
   image: string;
   name: string;
   year: string;
}

const defaultCovers: Cover[] = [
   {
      id: 66,
      image: "covers/66.jpg",
      name: "The Big Bang Theory",
      year: "[2007 - 2019]",
   },
   {
      id: 172,
      image: "covers/172.jpg",
      name: "Suits",
      year: "[2011 - 2019]",
   },
   {
      id: 530,
      image: "covers/530.jpg",
      name: "Seinfeld",
      year: "[1989 - 1998]",
   },
   {
      id: 541,
      image: "covers/541.jpg",
      name: "Prison Break",
      year: "[2005 - 2017]",
   },
   {
      id: 1910,
      image: "covers/1910.jpg",
      name: "Bron / Broen",
      year: "[2011 - 2018]",
   },
];

export function ShowCovers(): ReactElement {
   const [page, setPage] = useState(Math.floor(Math.random() * 19) + 1);
   const { shows, isError } = useFindCoverShow<TVshow>({ page });
   const navigate = useNavigate();
   const [covers, setCovers] = useState<Cover[]>([]);

   useEffect(() => {
      if (page > 0 && shows && shows.length > 5) {
         setCovers(getCovers(shows));
      } else if (isNetworkErrorAttemptingToFetchResource(isError)) {
         setCovers(defaultCovers);
      }
   }, [page, shows, isError]);

   return (
      <StyledCoverConatiner>
         <h3>Some TV shows</h3>
         <StyledCoversContainer>
            {covers &&
               covers.map((cover, index) => {
                  return (
                     <StyledSingleCover
                        hide={index > 2 ? true : false}
                        key={index}
                        onClick={() =>
                           navigate(createUrl(URLS.detail, cover.id))
                        }
                     >
                        <StyledImg
                           title={`${cover.name} ${cover.year}`}
                           src={`${cover.image}`}
                           alt={`${cover.name}`}
                        />
                     </StyledSingleCover>
                  );
               })}
         </StyledCoversContainer>
      </StyledCoverConatiner>
   );
}

function getSingleCover(show: TVshow): Cover {
   return {
      id: show?.id,
      image: show?.image.medium,
      year: show?.premiered,
      name: show?.name,
   };
}

function getCovers(shows: TVshow[]): Cover[] {
   const showSize = shows.length;
   const idTvShow: Number[] = [];
   const covers: any[] = [];
   while (idTvShow.length < 5) {
      var number = randomNumber(showSize);
      if (idTvShow.indexOf(number) === -1) {
         idTvShow.push(number);
         covers.push(shows[number]);
      }
   }
   const idTvShow1 = randomNumber(showSize);
   const idTvShow2 = randomNumber(showSize);
   const idTvShow3 = randomNumber(showSize);
   const idTvShow4 = randomNumber(showSize);
   const idTvShow5 = randomNumber(showSize);

   return [
      getSingleCover(shows[idTvShow1]),
      getSingleCover(shows[idTvShow2]),
      getSingleCover(shows[idTvShow3]),
      getSingleCover(shows[idTvShow4]),
      getSingleCover(shows[idTvShow5]),
   ];
}
